import bcrypt from 'bcrypt'

export const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = 12
  const salt = await bcrypt.genSalt(saltRounds)
  const hashedPassword = await bcrypt.hash(password, salt)
  return hashedPassword
}
