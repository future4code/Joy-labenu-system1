export interface EstudanteCreateData{
	id:string,
	nome:string,
	email:string,
	data_nasc:Date,
	turma_id:string,
	hobbies:string[]
}
export interface EstudanteChangeData{
	id:string,
	turma_id:string
}
export interface SearchEstudanteData{
	nome:string
}
export interface ChangeEstudanteData{
	id:string,
	turma_id:string
}
export interface EstudanteRepository{
	criar:(data:EstudanteCreateData)=>Promise<void>
	buscar:(data:SearchEstudanteData)=>Promise<any>
	mudar:(data:ChangeEstudanteData)=>Promise<void>
}