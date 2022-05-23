import { Request, Response } from 'express'
import { KnexTurmasRepository } from '../../data/knex/Turma/knex-turmas-repository'
import { MudarTurmaUseCase } from '../../use-cases/Turma/mudar-turma-modulo-use-case'

export const putModuloTurma = async (req: Request, res: Response): Promise<void> => {
  try {
    const { modulo, id } = req.body
    res.statusCode = 500

    if (!id) {
      res.statusCode = 400
      throw new Error("O campo 'id' é obrigatorio")
    }

    if (!modulo) {
      res.statusCode = 400
      throw new Error("O campo 'modulo' é obrigatorio")
    }

    const knexTurmasRepository = new KnexTurmasRepository()
    const mudarTurmaUseCase = new MudarTurmaUseCase(knexTurmasRepository)

    await mudarTurmaUseCase.executar({ id, modulo })

    res.status(200).send(`Modulo da turma alterado para ${modulo} com sucesso`)
  } catch (error: any) {
    res.status(res.statusCode).send(error.message || error.sqlMessage)
  }
}
