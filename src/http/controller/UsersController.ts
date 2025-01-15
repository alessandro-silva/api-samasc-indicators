import { UserAlreadyExistsError } from '@/errors/UserAlreadyExistsError'
import { UsersRepository } from '@/repositories/prisma/UsersRepository'
import { CreateUserService } from '@/services/CreateUser'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function UsersController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const bodySchema = z.object({
    name: z.string(),
    cnpj: z.string(),
    erp: z.string(),
    phoneNumber: z.string(),
    position: z.string(),
    statusPayment: z.string(),
  })

  const { name, cnpj, erp, phoneNumber, position, statusPayment } =
    bodySchema.parse(request.body)

  try {
    const usersRepository = new UsersRepository()
    const createUserService = new CreateUserService(usersRepository)

    const user = await createUserService.execute({
      name,
      cnpj,
      erp,
      phoneNumber,
      position,
      statusPayment,
    })

    return reply.send({ user })
  } catch (err) {
    if (err instanceof UserAlreadyExistsError) {
      return reply.status(409).send({ message: err.message })
    }

    return reply.status(500).send({ message: (err as Error).message })
  }
}
