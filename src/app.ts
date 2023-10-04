import fastify from 'fastify'

import { menuRoutes } from './http/controllers/menu/routes'

export const app = fastify()

app.register(menuRoutes)
