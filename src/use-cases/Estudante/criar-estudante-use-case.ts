import { EstudanteRepository } from "../../data/knex/Estudante/estudante.repository";
import { v4 as uuidv4 } from 'uuid'
export interface CriarEstudanteUseCaseRequest{
	nome:string,
	email:string,
	data_nasc:Date,
	turma_id:string,
	hobbies:string[]
}
export class CriarEstudanteUseCase {
	constructor(private estudanteRepository:EstudanteRepository) {}
	async execute(req:CriarEstudanteUseCaseRequest):Promise<void> {
		let {nome, email,data_nasc, turma_id,hobbies} = req;

		await this.estudanteRepository.criar({
			id: uuidv4(),
			nome,
			email,
			data_nasc,
			turma_id,
			hobbies
		})
	}
}