import { Request, Response } from "express"
import { connection } from "../../data/connection"
import { KnexEstudanteRepository } from "../../data/knex/Estudante/knex-estudante-repository"
import { ChangeEstudanteTurmaUseCase } from "../../use-cases/Estudante/mudar-estudante-turma-use-case"


export const putEstudante=async (req: Request, res: Response): Promise<void>=>{
	try {
		const {id,turma_id}=req.body
		if (!id) {
			res.statusCode = 400
			throw new Error("O 'id' é obrigatorio")
		      }
		      if (!turma_id) {
			res.statusCode = 400
			throw new Error("O 'turmaId' é obrigatorio")
		      }  
		  const listaDocentes=await connection("ESTUDANTE").select("nome").where("id",id)
		  const nomeEstudante=listaDocentes.map((docente)=>docente.nome)
		  const knexEstudanteRepository = new KnexEstudanteRepository()
		      const mudarEstudanteUseCase = new ChangeEstudanteTurmaUseCase(knexEstudanteRepository)
		      await mudarEstudanteUseCase.execute({id,turma_id})
		res.status(200).send(`Turma do Estudante ${nomeEstudante} alterada com sucesso`)
	} catch (error:any) {
		res.status(res.statusCode).send(error.message || error.sqlMessage)
	}
}