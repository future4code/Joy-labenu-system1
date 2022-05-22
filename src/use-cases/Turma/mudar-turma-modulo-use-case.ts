import { TurmasRepository } from '../../data/knex/Turma/turmas-repository'

export interface MudarTurmaUseCaseRequest {
    id: string,
    modulo: string
}

export class MudarTurmaUseCase {
  constructor(private turmasRepository: TurmasRepository) {}
  async executar(request: MudarTurmaUseCaseRequest): Promise<void> {
    const { id, modulo } = request

    await this.turmasRepository.mudar({
        id,
        modulo
    })
  }
}
