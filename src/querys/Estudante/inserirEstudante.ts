import { connection } from "../../data/connection";

export async function inserirEstudante(id: string,nome:string|undefined, email:string|undefined, dataNasc:Date|undefined, turmaId:string|undefined):Promise<void> {    
    const result = await connection("ESTUDANTE")
    .insert({
        "id": id,
        "nome": nome,
        "email": email,
        "data_nasc": dataNasc,
        "turma_id": turmaId
    })
}