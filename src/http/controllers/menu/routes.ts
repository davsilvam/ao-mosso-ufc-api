import { FastifyInstance } from 'fastify'
import { today } from './today.controller'

export async function menuRoutes(app: FastifyInstance) {
  app.get('/today/:restaurant', today)
}
