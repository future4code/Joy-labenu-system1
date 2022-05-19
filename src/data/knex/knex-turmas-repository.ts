import { connection } from "../connection";
import { TurmaChangeModuloData, TurmaCreateData, TurmasRepository } from "../turmas-repository";

export class KnexTurmasRepository implements TurmasRepository {
    async criar (data: TurmaCreateData): Promise<void> {
        await connection("TURMA").insert({
		    "id": data.id,
		    "nome": data.nome
		})
    }
    async mudar(data: TurmaChangeModuloData): Promise<void> { 
        await connection("TURMA").update({
            "modulo": data.modulo
        }).where({
            "id": data.id
        })
    }
}