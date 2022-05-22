export interface DocenteCreateData{
	id:string,
	nome:string,
	email:string,
	data_nasc:Date,
	turma_id:string,
	especialidades:string[]
}

export interface DocenteChangeData{
	id:string,
	turma_id:string
}

export interface DocenteRepository{
	criar:(data:DocenteCreateData)=>Promise<void>
	buscar:()=>Promise<any>
	mudar:(data:DocenteChangeData)=>Promise<void>
	buscarPoo:()=>Promise<any>
}