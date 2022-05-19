export interface TurmaCreateData {
    id: string,
    nome: string
}

export interface TurmasRepository {
    criar: (data: TurmaCreateData) => Promise<void>
}