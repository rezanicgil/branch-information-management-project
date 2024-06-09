import { hashPassword } from '../helpers/passwordHelper'
import User, { CreateUserDTO } from '../models/user.model'

export const createUser = async (input: CreateUserDTO): Promise<User> => {
  if (input.password) {
    input.password = await hashPassword(input.password)
  }
  return await User.create({ ...input })
}

export const findUser = async (email: string): Promise<User | null> => {
  const user = await User.findOne({ where: { email } })
  if (!user) {
    return null
  }
  return user
}
