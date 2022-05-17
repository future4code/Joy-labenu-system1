import { v4 as uuidv4 } from 'uuid'

export class Estudante  {

    private id: string
    private nome: string
    private email: string
    private data_nasc: string

    constructor(nome:string, email:string, data_nasc:string){
        this.id = uuidv4()
        this.nome = nome
        this.email = email
        this.data_nasc = data_nasc
    }

    public postEstudante() {
        
    }
}