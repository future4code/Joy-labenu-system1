import { DocenteRepository } from "../../data/knex/Docente/docente-repository"

export class BuscarDocentesPOOUseCase{
	constructor(private docenteRepository:DocenteRepository){}
	async execute():Promise<any> {
		const res=await this.docenteRepository.buscarPoo()
		return res
	}
}