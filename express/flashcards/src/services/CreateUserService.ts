import { AppError } from "../errors/AppError"

type CreateUserDTO = {
  name: string
  email: string
  password: string
}

export class CreateUserService {
  async execute({ name, email, password }: CreateUserDTO) {
    if (name.length === 0) throw new AppError([], 400)
    if (email.length === 0) throw new AppError([], 400)
    if (password.length < 6) throw new AppError([], 400)
  }
}