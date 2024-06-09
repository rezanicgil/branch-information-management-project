import { Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { Error } from 'sequelize'
import { AuthenticatedRequest } from '../middlewares/authMiddleware'

export async function createBranch(req: AuthenticatedRequest, res: Response): Promise<Response> {
  try {
    const user = req.user

    if (!user) {
      return res.json({
        message: 'Unauthorized!',
        status: StatusCodes.UNAUTHORIZED
      })
    }

    return res.status(StatusCodes.ACCEPTED).json({
      user: {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role
      }
    })
  } catch (error) {
    const err = error as Error
    return res.json({
      message: 'Internal Server Error!',
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      error: err.message.split('\n')
    })
  }
}
