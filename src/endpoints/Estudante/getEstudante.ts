import { Request, Response } from "express";
import { KnexEstudanteRepository } from "../../data/knex/Estudante/knex-estudante-repository";
import { BuscarEstudanteUseCase } from "../../use-cases/Estudante/buscar-estudante-use-case";

export const getEstudante = async (req:Request, res:Response):Promise<void> => {
    let errorCode = 500
    try {
        const nome = req.params.nome as string
        let result
        const knexEstudanteRepository=new KnexEstudanteRepository()
		const buscarEstudanteUseCase=new BuscarEstudanteUseCase(knexEstudanteRepository);
        if(!nome){
            throw new Error("Parâmetros faltando, faça a requisição novamente passando o parâmetro necessário");
            
        }else{
            result = await buscarEstudanteUseCase.execute({nome})
        }
        
        res.status(201).send(result)
    } catch (error:any) {
        res.status(errorCode).send(error.message || error.sqlMessage)
    }
}