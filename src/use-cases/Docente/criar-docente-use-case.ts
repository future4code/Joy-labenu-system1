import { DocenteRepository } from "../../data/knex/Docente/docente-repository";
import { v4 as uuidv4 } from 'uuid'
export interface CriarDocenteUseCaseRequest{
	nome:string,
	email:string,
	dataNasc:Date,
	turmaId:string,
	especialidades:string[]
}

export class CriarDocenteUseCase{
	constructor(private docenteRepository:DocenteRepository){}
	async execute(req:CriarDocenteUseCaseRequest):Promise<void> {
		let {nome, email, turmaId, dataNasc,especialidades} = req;

		await this.docenteRepository.criar({
			id: uuidv4(),
			nome,
			email,
			dataNasc,
			turmaId,
			especialidades
		})
	}
}