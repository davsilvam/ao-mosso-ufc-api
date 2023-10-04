import { FastifyReply, FastifyRequest } from 'fastify'

import { GetTodayMenuUseCase } from '../../../use-cases/get-today-menu'

export async function today(_request: FastifyRequest, reply: FastifyReply) {
  try {
    const getTodayMenuUseCase = new GetTodayMenuUseCase()

    const { menu } = await getTodayMenuUseCase.execute()

    reply.status(200).send(menu)
  } catch (error) {
    if (error instanceof Error) {
      reply.status(404).send({ message: error.message })
    }
  }
}
