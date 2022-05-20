import { connection } from "../../connection";
import { DocenteCreateData, DocenteRepository } from "./docente-repository";

export class KnexDocenteRespository implements DocenteRepository{
	async buscar ():Promise<any>{
		let result=await connection("DOCENTE")
		return result
	};
	
	async criar (data: DocenteCreateData): Promise<void>{
		await connection("DOCENTE")
		.insert({
		    "id": data.id,
		    "nome": data.nome,
		    "email": data.email,
		    "data_nasc": data.dataNasc,
		    "turma_id": data.turmaId,
		    "especialidades":data.especialidades
		})
	};

}