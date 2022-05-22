import { Estudante } from "../../../model/Estudante";
import { connection } from "../../connection";
import { ChangeEstudanteData, EstudanteCreateData, EstudanteRepository, SearchEstudanteData } from "./estudante.repository";
import { v4 as uuidv4 } from 'uuid'
export class KnexEstudanteRepository implements EstudanteRepository{
	async mudar(data: ChangeEstudanteData): Promise<void>{
		await connection("ESTUDANTE")
		.update({
			"turma_id":data.turma_id
		}).where("id",data.id)
	};
	async buscar (data:SearchEstudanteData) : Promise<any>{
		let result=await connection("ESTUDANTE")
		.where("nome","like",`%${data.nome}%`)
		return result
	};
	async criar (data: EstudanteCreateData):Promise<void>{
		const newEstudante=new Estudante(data.id,data.nome,data.email,data.data_nasc,data.turma_id,data.hobbies)
		await connection("ESTUDANTE")
		.insert({
			"id":data.id,
			"nome":data.nome,
			"email":data.email,
			"data_nasc":data.data_nasc,
			"turma_id":data.turma_id
		})
		const arrayHobbies=newEstudante.getHobbies()

		for (const hobby of arrayHobbies) {
			const idHobby = uuidv4()
			const idHobbyEstudant = uuidv4()
			await connection("HOBBY")
			.insert({
				"id":idHobby,
				"nome":hobby
			})
			await connection("ESTUDANTE_HOBBY")
			.insert({
				"id":idHobbyEstudant,
				"estudante_id":newEstudante.getId(),
				"hobby_id":idHobby
			})
		}
	};
	
}