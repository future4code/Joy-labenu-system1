import { Request, Response } from "express";
import { KnexDocenteRespository } from "../../data/knex/Docente/knex-docente-repository";
import { BuscarDocentesUseCase } from "../../use-cases/Docente/buscar-docentes-use-case";

export const getDocente=async(req:Request,res:Response):Promise<void>=>{
	let errorCode = 400
	try {
		const knexDocenteRespository=new KnexDocenteRespository()
		const buscarDocenteUseCase=new BuscarDocentesUseCase(knexDocenteRespository);
		let docentes=await buscarDocenteUseCase.execute()
		res.status(200).send(docentes)

	} catch (error:any) {
		res.status(errorCode).send({ message: error.message || error.sqlmessage })
	}
}