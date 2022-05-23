import { TurmasRepository } from "../../data/knex/Turma/turmas-repository"

export class BuscarTurmasAtivasUseCase{
	constructor(private turmasRepository:TurmasRepository){}
	async execute():Promise<any> {
		const res=await this.turmasRepository.buscar()
		return res
	}
}