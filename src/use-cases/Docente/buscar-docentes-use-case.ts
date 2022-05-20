import { DocenteRepository } from "../../data/knex/Docente/docente-repository";

export class BuscarDocentesUseCase{
	constructor(private docenteRepository:DocenteRepository){}
	async execute():Promise<any> {
		await this.docenteRepository.buscar()
	}
}