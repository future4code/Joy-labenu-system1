import { EstudanteRepository } from "../../data/knex/Estudante/estudante.repository";

export interface ChangeEstudanteTurmaUseCaseRequest{
	id:string,
	turma_id:string
}
export class ChangeEstudanteTurmaUseCase  {
	constructor(private estudanteRepository:EstudanteRepository) {}
	async execute(req:ChangeEstudanteTurmaUseCaseRequest):Promise<void>{
		const {id,turma_id}=req
		await this.estudanteRepository.mudar({
			id,
			turma_id
		})
	}
}