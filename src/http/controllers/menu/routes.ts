import { FastifyInstance } from 'fastify'
import { today } from './today.controller'
import { getByDate } from './get-by-date.controller'

export async function menuRoutes(app: FastifyInstance) {
  app.get('/:restaurant', today)
  app.get('/:restaurant/:date', getByDate)
}
