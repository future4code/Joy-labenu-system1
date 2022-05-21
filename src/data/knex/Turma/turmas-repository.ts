export interface TurmaCreateData {
    id: string,
    nome: string
}

export interface TurmaChangeModuloData { 
    id: string,
    modulo: string
}

export interface TurmasRepository {
    criar: (data: TurmaCreateData) => Promise<void>
    mudar: (data: TurmaChangeModuloData) => Promise<void>
    buscar:()=>Promise<any>
}