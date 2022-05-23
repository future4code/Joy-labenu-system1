import { Request, Response } from "express";
import { KnexDocenteRepository } from "../../data/knex/Docente/knex-docente-repository";
import { BuscarDocentesPOOUseCase } from "../../use-cases/Docente/buscar-docente-poo";

export const getDocentesPoo=async(req:Request,res:Response):Promise<void>=>{
	let errorCode = 400
	try {
		const knexDocenteRepository=new KnexDocenteRepository()
		const buscarDocentePooUseCase=new BuscarDocentesPOOUseCase(knexDocenteRepository);
		let docentes=await buscarDocentePooUseCase.execute()
		res.status(200).send(docentes)

	} catch (error:any) {
		res.status(errorCode).send({ message: error.message || error.sqlmessage })
	}
}