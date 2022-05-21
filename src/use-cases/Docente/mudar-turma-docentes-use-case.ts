import { DocenteRepository } from "../../data/knex/Docente/docente-repository";

export interface MudarDocenteUseCaseRequest{
	id:string,
	turma_id:string
}

export class MudarDocenteUseCase{
	constructor(private docenteRepository: DocenteRepository) {}
	async execute(req:MudarDocenteUseCaseRequest):Promise<void> {
		const {id,turma_id}=req
		
		await this.docenteRepository.mudar({
			id,
			turma_id
		})
	}
}