import { Docente } from "../../../model/Docente";
import { connection } from "../../connection";
import { DocenteChangeData, DocenteCreateData, DocenteRepository } from "./docente-repository";
import { v4 as uuidv4 } from 'uuid'
export class KnexDocenteRepository implements DocenteRepository{
	
	async mudar(data: DocenteChangeData):Promise<void>{
		await connection("DOCENTE")
		.update({
			"turma_id":data.turma_id
		}).where({
			"id":data.id
		})
	};
	async buscar ():Promise<any>{
		let result=await connection("DOCENTE")
		return result
	};
	
	async criar (data: DocenteCreateData): Promise<void>{
		const newProfessor=new Docente(data.id,data.nome,data.email,data.data_nasc,data.turma_id,data.especialidades)
		await connection("DOCENTE")
		.insert({
		    "id": data.id,
		    "nome": data.nome,
		    "email": data.email,
		    "data_nasc": data.data_nasc,
		    "turma_id": data.turma_id,
		})
		const arrayEspecialidades = newProfessor.getEspecialidades()
		
		for (let especialidade of arrayEspecialidades) {
			const idEspecialidade = uuidv4()
			const idEspecDocente = uuidv4()
	    
			await connection('ESPECIALIDADE')
			    .insert({
				id: idEspecialidade,
				nome: especialidade
			    })
	    
			await connection('DOCENTE_ESPECIALIDADE')
			    .insert({
				id: idEspecDocente,
				docente_id: newProfessor.getId(),
				especialidade_id: idEspecialidade
			    })
		    }

	};

}