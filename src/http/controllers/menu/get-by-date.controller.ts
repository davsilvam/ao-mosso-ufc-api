import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

import { MenuNotFoundError } from '@/use-cases/errors/menu-not-found.error'
import { makeGetMenuByDateUseCase } from '@/use-cases/factories/make-get-menu-by-date'

export async function getByDate(request: FastifyRequest, reply: FastifyReply) {
  const paramsSchema = z.object({
    restaurant: z.string(),
    date: z.string(),
  })

  const { restaurant, date } = paramsSchema.parse(request.params)

  try {
    const getMenuByDate = makeGetMenuByDateUseCase()

    const { menu } = await getMenuByDate.execute({ restaurant, date })

    reply.status(200).send({
      menu,
    })
  } catch (error) {
    if (error instanceof MenuNotFoundError) {
      reply.status(404).send({ message: error.message })
    }
  }
}
