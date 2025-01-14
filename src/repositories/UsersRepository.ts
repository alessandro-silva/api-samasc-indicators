// import { ICreateUserDTO } from '@/dtos/ICreateUser'
import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'

export class UsersRepository {
  async create({
    name,
    cnpj,
    erp,
    phoneNumber,
    position,
    statusPayment,
  }: Prisma.UserCreateInput) {
    return prisma.user.create({
      data: {
        name,
        cnpj,
        erp,
        phoneNumber,
        position,
        statusPayment,
      },
    })
  }
}
