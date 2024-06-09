import jwt from 'jsonwebtoken'
import User from '../models/user.model'

const secretKey = 'your_secret_key' // Güvenli bir secret key kullanın ve .env dosyasından alın

export const generateToken = (user: User): string => {
  const payload = {
    id: user.userId,
    email: user.email,
    role: user.role,
    firstName: user.firstName,
    lastName: user.lastName
  }
  return jwt.sign(payload, secretKey, { expiresIn: '1h' })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const verifyToken = (token: string): any => {
  try {
    return jwt.verify(token, secretKey)
  } catch (error) {
    return null
  }
}
