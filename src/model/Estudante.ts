import { v4 as uuidv4 } from 'uuid'
import { inserirEstudante } from '../querys/inserirEstudante'
import {buscarEstudante} from "../querys/buscarEstudante"

export class Estudante  {

    private id: string
    private nome: string|undefined
    private email: string|undefined
    private dataNasc: Date|undefined
    private turmaId: string|undefined

    constructor(nome?:string, email?:string, dataNasc?: Date, tumarId?:string){
        this.id = uuidv4()
        this.nome = nome
        this.email = email
        this.dataNasc = dataNasc
        this.turmaId = tumarId
    }

    public async cadastrarEstudante() {
       return await inserirEstudante(this.id, this.nome, this.email, this.dataNasc, this.turmaId)
    }

    public buscarEstudantes(){
        return buscarEstudante(this.nome)
    }
}