import { v4 as uuidv4 } from 'uuid'
import { inserirEstudante } from '../querys/inserirEstudante'

export class Estudante  {

    private id: string
    private nome: string
    private email: string
    private dataNasc: Date

    constructor(nome:string, email:string, dataNasc: Date){
        this.id = uuidv4()
        this.nome = nome
        this.email = email
        this.dataNasc = dataNasc
    }

    public async cadastrarEstudante() {
       return await inserirEstudante(this.id, this.nome, this.email, this.dataNasc)
    }
}