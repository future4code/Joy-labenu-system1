import { connection } from "../../data/connection";

export async function inserirDocente(id: string|undefined,nome:string|undefined, email:string|undefined, 
	dataNasc:Date|undefined, turmaId:string|undefined,especialidades:string[]|undefined):Promise<void> {
	await connection("DOCENTE")
		.insert({
		    "id": id,
		    "nome": nome,
		    "email": email,
		    "data_nasc": dataNasc,
		    "turma_id": turmaId,
		})
		
}