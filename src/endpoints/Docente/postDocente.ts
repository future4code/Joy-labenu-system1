import { Request, Response } from "express";
import { KnexDocenteRepository } from "../../data/knex/Docente/knex-docente-repository";
import { CriarDocenteUseCase } from "../../use-cases/Docente/criar-docente-use-case";

export async function postDocente(req:Request, res:Response):Promise<void> {
	let errorCode = 500
	try {
		let {nome, email, turma_id, data_nasc,especialidades} = req.body
		
		const data = data_nasc.split("/");
		data_nasc = new Date(`${data[2]}-${data[1]}-${data[0]}`);

		if(!nome){
			errorCode = 400
			throw new Error("O campo 'nome' é obrigatorio")
		    }else if(!email){
			errorCode = 400
			throw new Error("O campo 'email' é obrigatorio")
		    }else if( !data_nasc){
			errorCode = 400
			throw new Error("O campo 'dataNasc' é obrigatorio")
		    }else if(!turma_id){
			errorCode = 400
			throw new Error("O campo 'turmaId' é obrigatorio")
		    }
		    const knexDocenteRepository=new KnexDocenteRepository()
		    const criarDocenteUseCase=new CriarDocenteUseCase(knexDocenteRepository);

		    await criarDocenteUseCase.execute({nome, email, data_nasc, turma_id,especialidades})

		res.status(201).send("Docente Cadastrado")
	} catch (error:any) {
		res.status(errorCode).send(error.message || error.sqlMessage)
	}
}