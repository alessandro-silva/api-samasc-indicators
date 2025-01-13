import { prisma } from '@/lib/prisma'
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

  await prisma.user.create({
    data: {
      name,
      cnpj,
      erp,
      phoneNumber,
      position,
      statusPayment,
    },
  })

  return reply.send({ message: 'User created' })
}
