import jwt from 'jsonwebtoken'
import User from '../models/user.model'
import dotenv from 'dotenv'
dotenv.config()

const secretKey = process.env.JWT_SECRET_KEY

if (!secretKey) {
  throw Error('You should provide a JWT_SECRET KEY on .env credentials')
}

export const generateToken = (user: User): string => {
  const payload = {
    id: user.userId,
    email: user.email,
    role: user.role,
    firstName: user.firstName,
    lastName: user.lastName
  }
  return jwt.sign(payload, secretKey, { expiresIn: '3h' })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const verifyToken = (token: string): any => {
  try {
    return jwt.verify(token, secretKey)
  } catch (error) {
    return null
  }
}
