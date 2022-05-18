import { Express, Request, Response } from "express";
import { Estudante } from "../model/Estudante";

export const postEstudante = async (req:Request, res:Response):Promise<void> => {
    let errorCode = 500
    try {
        const nome = req.body.nome
        const email = req.body.email
        const dataNasc = req.body.dataNasc

        const data = dataNasc.split("/");
        const dataNascimento = new Date(data[2], data[1], data[0]);
        
        if(!nome){
            errorCode = 400
            throw new Error("O campo 'nome' é obrigatorio")
        }else if(!email){
            errorCode = 400
            throw new Error("O campo 'email' é obrigatorio")
        }else if( !dataNasc){
            errorCode = 400
            throw new Error("O campo 'dataNasc' é obrigatorio")
        }

        const novoEstudante = new Estudante(nome, email, dataNascimento)
        novoEstudante.cadastrarEstudante()
        
        res.status(201).send("Estudante Cadastrado")
    } catch (error:any) {
        res.status(errorCode).send(error.message || error.sqlMessage)
    }
}