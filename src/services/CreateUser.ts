import { UserAlreadyExistsError } from '@/errors/UserAlreadyExistsError'
import { IUsersRepository } from '@/repositories/IUsersRepository'

interface IRequest {
  name: string
  cnpj: string
  erp: string
  phoneNumber: string
  position: string
  statusPayment: string
}

export class CreateUserService {
  constructor(private userRepository: IUsersRepository) {}

  async execute({
    name,
    cnpj,
    erp,
    phoneNumber,
    position,
    statusPayment,
  }: IRequest) {
    const userAlreadyExists =
      await this.userRepository.findByPhoneNumber(phoneNumber)

    if (userAlreadyExists) {
      throw new UserAlreadyExistsError()
    }

    const user = await this.userRepository.create({
      name,
      cnpj,
      erp,
      phoneNumber,
      position,
      statusPayment,
    })

    return user
  }
}
