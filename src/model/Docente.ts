import { v4 as uuidv4 } from 'uuid'
import { Usuario } from './Usuario';

export class Docente  extends Usuario{

    constructor( protected id: string,
        protected nome: string|undefined,
        protected email: string|undefined,
        protected dataNasc: Date|undefined,
        protected turmaId: string|undefined,
        protected especialidades: string[]){
        super(nome, email, dataNasc, turmaId);
        this.especialidades = especialidades
    }
   
   public getId() : string {
       return this.id
   }
   
   
   public getEspecialidades() : string[] {
       return this.especialidades
   }
   
   
}

