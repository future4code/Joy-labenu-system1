import { v4 as uuidv4 } from 'uuid'
import { TurmasRepository } from '../data/turmas-repository'

export interface CriarTurmaUseCaseRequest {
  nome: string
}

export class CriarTurmaUseCase {
  constructor(private turmasRepository: TurmasRepository) {}
  async executar(request: CriarTurmaUseCaseRequest): Promise<void> {
    const { nome } = request

    await this.turmasRepository.criar({
      id: uuidv4(),
      nome
    })
  }
}
