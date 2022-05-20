import { Request, Response } from "express";
import { KnexDocenteRespository } from "../../data/knex/Docente/knex-docente-repository";
import { CriarDocenteUseCase } from "../../use-cases/Docente/criar-docente-use-case";

export async function postDocente(req:Request, res:Response):Promise<void> {
	let errorCode = 500
	try {
		let {nome, email, turmaId, dataNasc,especialidades} = req.body
		
		const data = dataNasc.split("/");
		dataNasc = new Date(data[2], data[1], data[0]);

		if(!nome){
			errorCode = 400
			throw new Error("O campo 'nome' é obrigatorio")
		    }else if(!email){
			errorCode = 400
			throw new Error("O campo 'email' é obrigatorio")
		    }else if( !dataNasc){
			errorCode = 400
			throw new Error("O campo 'dataNasc' é obrigatorio")
		    }else if(!turmaId){
			errorCode = 400
			throw new Error("O campo 'turmaId' é obrigatorio")
		    }
		    const knexDocenteRespository=new KnexDocenteRespository()
		    const criarDocenteUseCase=new CriarDocenteUseCase(knexDocenteRespository);

		    await criarDocenteUseCase.execute({nome, email, turmaId, dataNasc,especialidades})

		res.status(201).send("Docente Cadastrado")
	} catch (error:any) {
		res.status(errorCode).send(error.message || error.sqlMessage)
	}
}