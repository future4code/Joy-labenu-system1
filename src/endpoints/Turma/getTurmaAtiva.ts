import { Request, Response } from "express";
import { KnexTurmasRepository } from "../../data/knex/Turma/knex-turmas-repository";

import { BuscarTurmasAtivasUseCase } from "../../use-cases/Turma/buscar-turmas-ativas-use-case";

export const getTurmaAtiva=async(req:Request,res:Response):Promise<void>=>{
	let errorCode = 400
	try {
		const knexTurmaRepository=new KnexTurmasRepository()
		const buscarTurmasAtivasUseCase=new BuscarTurmasAtivasUseCase(knexTurmaRepository);
		let turmas=await buscarTurmasAtivasUseCase.execute()
		res.status(200).send(turmas)

	} catch (error:any) {
		res.status(errorCode).send({ message: error.message || error.sqlmessage })
	}
}