import { v4 as uuidv4 } from 'uuid'
import { buscarDocentes } from '../querys/Docente/buscarDocentes';
import { inserirDocente } from '../querys/Docente/inserirDocente';
import { Usuario } from './Usuario';

export class Docente  extends Usuario{

    constructor( protected id: string,
        protected nome: string|undefined,
        protected email: string|undefined,
        protected dataNasc: Date|undefined,
        protected turmaId: string|undefined,
        protected especialidades: string[]){
        super(nome, email, dataNasc, turmaId);
        this.id=uuidv4();
        this.especialidades = especialidades
    }
   
   public get getId() : string {
       return this.id
   }
   
   
   public get getEspecialidades() : string[] {
       return this.especialidades
   }
   
   public async cadastrarDocente() {
       return await inserirDocente(this.id,this.nome,this.email,this.dataNasc,this.turmaId,this.especialidades)
   }
   
   public buscarDocentes(){
    return buscarDocentes()
}
}

