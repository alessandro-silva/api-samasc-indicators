import { Prisma, User } from '@prisma/client'

export interface IUsersRepository {
  findByPhoneNumber(phoneNumber: string): Promise<User | null>
  create(data: Prisma.UserCreateInput): Promise<User>
}
