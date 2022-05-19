import { Request, Response } from "express";
import { Docente } from "../../model/Docente";

export const getDocente=async(req:Request,res:Response):Promise<void>=>{
	let errorCode = 400
	try {
		const result=new Docente().buscarDocentes()
		res.status(200).send(result)

	} catch (error:any) {
		res.status(errorCode).send({ message: error.message || error.sqlmessage })
	}
}