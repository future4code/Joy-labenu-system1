import { connection } from "../data/connection";

export async function inserirEstudante(id: string,nome:string, email:string, dataNasc:Date):Promise<void> {
   
    const result = await connection("ESTUDANTE")
    .insert({
        "id": id,
        "nome": nome,
        "email": email,
        "data_nasc": dataNasc
    })
}