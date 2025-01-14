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
    const user = await CreateUserService({
      name,
      cnpj,
      erp,
      phoneNumber,
      position,
      statusPayment,
    })

    return reply.send({ user })
  } catch (err) {
    return reply.status(409).send()
  }
}
