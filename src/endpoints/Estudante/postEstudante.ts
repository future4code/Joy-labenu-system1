import { Request, Response } from "express";
import { KnexEstudanteRepository } from "../../data/knex/Estudante/knex-estudante-repository";
import { CriarEstudanteUseCase } from "../../use-cases/Estudante/criar-estudante-use-case";

export const postEstudante = async (req:Request, res:Response):Promise<void> => {
    let errorCode = 500
    try {
        let {nome, email, turma_id, data_nasc,hobbies} = req.body
      
        const data = data_nasc?.split("/");
        data_nasc = new Date(data[2], data[1], data[0]);
        
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
        const knexEstudanteRepository=new KnexEstudanteRepository()
        const criarEstudanteUseCase=new CriarEstudanteUseCase(knexEstudanteRepository);

       await criarEstudanteUseCase.execute({nome, email, data_nasc, turma_id,hobbies})
        
        res.status(201).send("Estudante Cadastrado")
    } catch (error:any) {
        res.status(errorCode).send(error.message || error.sqlMessage)
    }
}