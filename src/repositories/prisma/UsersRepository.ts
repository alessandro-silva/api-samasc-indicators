// import { ICreateUserDTO } from '@/dtos/ICreateUser'
import { prisma } from '@/lib/prisma'
import { Prisma, User } from '@prisma/client'
import { IUsersRepository } from '../IUsersRepository'

export class UsersRepository implements IUsersRepository {
  async findByPhoneNumber(phoneNumber: string): Promise<User | null> {
    return prisma.user.findFirst({
      where: {
        phoneNumber,
      },
    })
  }

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
