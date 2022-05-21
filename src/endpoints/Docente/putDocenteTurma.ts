import { Request, Response } from "express"
import { connection } from "../../data/connection"
import { KnexDocenteRepository } from "../../data/knex/Docente/knex-docente-repository"
import { MudarDocenteUseCase } from "../../use-cases/Docente/mudar-turma-docentes-use-case"

export const putDocenteTurma=async (req: Request, res: Response): Promise<void>=>{
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
		  const listaDocentes=await connection("DOCENTE").select("nome").where("id",id)
		  const nomeDocente=listaDocentes.map((docente)=>docente.nome)
		  const knexDocenteRepository = new KnexDocenteRepository()
		      const mudarDocenteUseCase = new MudarDocenteUseCase(knexDocenteRepository)
		      await mudarDocenteUseCase.execute({id,turma_id})
		res.status(200).send(`Turma do Docente ${nomeDocente} alterada com sucesso`)
	} catch (error:any) {
		res.status(res.statusCode).send(error.message || error.sqlMessage)
	}
}