import { Request, Response, NextFunction } from 'express'
import { verifyToken } from '../helpers/authHelper'
import User, { UserRole } from '../models/user.model'
import { StatusCodes } from 'http-status-codes'

export interface AuthenticatedRequest extends Request {
  user?: User
}

export const authMiddleware = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ error: 'No token provided' })
  }

  const token = authHeader.split(' ')[1]
  const decoded = verifyToken(token)
  if (!decoded) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ error: 'Invalid token' })
  }

  req.user = decoded
  next()
}

export const isOwner = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const user = req.user
  if (user?.role !== UserRole.OWNER) {
    return res.status(StatusCodes.FORBIDDEN).json({ error: 'Access denied' })
  }
  next()
}

export const isEmployee = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const user = req.user
  if (user?.role !== UserRole.EMPLOYEEE) {
    return res.status(StatusCodes.FORBIDDEN).json({ error: 'Access denied' })
  }
  next()
}
