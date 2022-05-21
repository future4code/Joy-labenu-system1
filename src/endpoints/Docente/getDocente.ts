import { Request, Response } from "express";
import { KnexDocenteRepository } from "../../data/knex/Docente/knex-docente-repository";
import { BuscarDocentesUseCase } from "../../use-cases/Docente/buscar-docentes-use-case";

export const getDocente=async(req:Request,res:Response):Promise<void>=>{
	let errorCode = 400
	try {
		const knexDocenteRepository=new KnexDocenteRepository()
		const buscarDocenteUseCase=new BuscarDocentesUseCase(knexDocenteRepository);
		let docentes=await buscarDocenteUseCase.execute()
		res.status(200).send(docentes)

	} catch (error:any) {
		res.status(errorCode).send({ message: error.message || error.sqlmessage })
	}
}