export interface DocenteCreateData{
	id:string,
	nome:string,
	email:string,
	dataNasc:Date,
	turmaId:string,
	especialidades:string[]
}

export interface DocenteRepository{
	criar:(data:DocenteCreateData)=>Promise<void>
	buscar:()=>Promise<any>
}