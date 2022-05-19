import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid'
import { Docente } from './Docente'
import { Estudante } from './Estudante';

export class Turma  {

    private id:string
    private nome:string
    private docentes:Docente[]
    private estudantes:Estudante[]
    private modulo:number

    constructor(nome:string,docentes:Docente[],estudantes:Estudante[],modulo:number){
        this.id=uuidv4()
        this.nome=nome
        this.docentes=docentes
        this.estudantes=estudantes
        this.modulo=modulo
    }

    /**
     * postTurma
     */
    public postTurma() {
        async (req:Request,res:Response):Promise<void> =>{
            try {
                const {nome,docentes,estudantes,modulo}=req.body
                
            } catch (error:any) {
                
            }
        }
    }
}