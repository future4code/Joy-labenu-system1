import { DocenteRepository } from "../../data/knex/Docente/docente-repository";
import { v4 as uuidv4 } from 'uuid'
export interface CriarDocenteUseCaseRequest{
	nome:string,
	email:string,
	data_nasc:Date,
	turma_id:string,
	especialidades:string[]
}

export class CriarDocenteUseCase{
	constructor(private docenteRepository:DocenteRepository){}
	async execute(req:CriarDocenteUseCaseRequest):Promise<void> {
		let {nome, email,data_nasc, turma_id,especialidades} = req;

		await this.docenteRepository.criar({
			id: uuidv4(),
			nome,
			email,
			data_nasc,
			turma_id,
			especialidades
		})
	}
}