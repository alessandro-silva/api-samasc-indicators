import { UsersRepository } from '@/repositories/UsersRepository'

interface IRequest {
  name: string
  cnpj: string
  erp: string
  phoneNumber: string
  position: string
  statusPayment: string
}

export async function CreateUserService({
  name,
  cnpj,
  erp,
  phoneNumber,
  position,
  statusPayment,
}: IRequest) {
  const userRepository = new UsersRepository()

  const user = await userRepository.create({
    name,
    cnpj,
    erp,
    phoneNumber,
    position,
    statusPayment,
  })

  return user
}
