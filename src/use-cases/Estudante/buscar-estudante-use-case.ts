import { EstudanteRepository } from "../../data/knex/Estudante/estudante.repository";

export interface SearchEstudanteUseCaseRequest {
	nome:string
}
export class BuscarEstudanteUseCase{
	constructor(private estudanteRepository:EstudanteRepository){}
	async execute(req:SearchEstudanteUseCaseRequest):Promise<any>{
		let {nome}=req
		const res=await this.estudanteRepository.buscar({nome})
		return res
	}
}