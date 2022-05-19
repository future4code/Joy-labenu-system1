import { Request, Response } from 'express'
import { KnexTurmasRepository } from '../../data/knex/knex-turmas-repository'
import { CriarTurmaUseCase } from '../../use-cases/criar-turma-use-case'

export const postTurma = async (req: Request, res: Response): Promise<void> => {
  try {
    const { nome } = req.body
    res.statusCode = 500

    if (!nome) {
      res.statusCode = 400
      throw new Error("O campo 'nome' é obrigatorio")
    }

    const knexTurmasRepository = new KnexTurmasRepository()
    const criarTurmaUseCase = new CriarTurmaUseCase(knexTurmasRepository)

    await criarTurmaUseCase.executar({ nome })

    res.status(201).send('Turma criada com sucesso')
  } catch (error: any) {
    res.status(res.statusCode).send(error.message || error.sqlMessage)
  }
}
