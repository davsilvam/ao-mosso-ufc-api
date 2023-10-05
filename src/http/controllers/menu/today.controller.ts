import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

import { ApiMenuRepository } from '@/repositories/api/api-menu-repository'
import { GetTodayMenuUseCase } from '@/use-cases/get-today-menu'
import { MenuNotFoundError } from '@/use-cases/errors/menu-not-found.error'

export async function today(request: FastifyRequest, reply: FastifyReply) {
  const paramsSchema = z.object({
    restaurant: z.string(),
  })

  const { restaurant } = paramsSchema.parse(request.params)

  try {
    const apiMenuRepository = new ApiMenuRepository()
    const getTodayMenuUseCase = new GetTodayMenuUseCase(apiMenuRepository)

    const { menu } = await getTodayMenuUseCase.execute({ restaurant })

    reply.status(200).send(menu)
  } catch (error) {
    if (error instanceof MenuNotFoundError) {
      reply.status(404).send({ message: error.message })
    }
  }
}
