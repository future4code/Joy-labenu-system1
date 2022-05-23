import { Usuario } from './Usuario'


export class Estudante  extends Usuario{

   
    constructor( protected id: string,
        protected nome: string|undefined,
        protected email: string|undefined,
        protected dataNasc: Date|undefined,
        protected turmaId: string|undefined,
        protected hobbies:string[]
    ){
      super(nome,email,dataNasc,turmaId);
      this.hobbies=hobbies
    }

    public getId() : string {
        return this.id
    }
    public getHobbies() : string[] {
        return this.hobbies
    }
    

}