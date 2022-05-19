import { connection } from "../connection";
import { TurmaCreateData, TurmasRepository } from "../turmas-repository";

export class KnexTurmasRepository implements TurmasRepository {
    async criar (data: TurmaCreateData): Promise<void> {
        await connection("TURMA").insert({
		    "id": data.id,
		    "nome": data.nome
		})
    }
}