import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

import { MenuNotFoundError } from '@/use-cases/errors/menu-not-found.error'
import { makeGetTodayMenuUseCase } from '@/use-cases/factories/make-get-today-menu'

export async function today(request: FastifyRequest, reply: FastifyReply) {
  const paramsSchema = z.object({
    restaurant: z.string(),
  })

  const { restaurant } = paramsSchema.parse(request.params)

  try {
    const getTodayMenuUseCase = makeGetTodayMenuUseCase()

    const { menu } = await getTodayMenuUseCase.execute({ restaurant })

    reply.status(200).send({
      menu,
    })
  } catch (error) {
    if (error instanceof MenuNotFoundError) {
      reply.status(404).send({ message: error.message })
    }
  }
}
