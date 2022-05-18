import { Express, Request, Response } from "express";
import { Estudante } from "../model/Estudante";

export const gertEstudante = async (req:Request, res:Response):Promise<void> => {
    let errorCode = 500
    try {
        const nome = req.params.nome as string
        let result

        if(!nome){
            result = new Estudante().buscarEstudantes()
        }else{
            result = new Estudante(nome).buscarEstudantes()
        }
        
        res.status(201).send()
    } catch (error:any) {
        res.status(errorCode).send(error.message || error.sqlMessage)
    }
}