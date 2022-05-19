import { connection } from "../../data/connection";
import { Docente } from "../../model/Docente";

export async function buscarDocentes():Promise<any> {
	let res=await connection("DOCENTE")
	return res
}