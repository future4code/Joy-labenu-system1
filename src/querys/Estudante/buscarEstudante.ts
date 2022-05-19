import { connection } from "../../data/connection";

export async function buscarEstudante(nome?: string|undefined):Promise<any> {
   
    let result
    if(!nome){
        result = await connection("ESTUDANTE")
    }else{
        result = await connection("ESTUDANTE")
        .where(nome)
    }
    return result
}