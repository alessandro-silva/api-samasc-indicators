import { FastifyInstance } from 'fastify'
import { UsersController } from './controller/UsersController'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', UsersController)
}
