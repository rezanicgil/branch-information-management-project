import { Request, Response } from 'express'
import { createUser, findUser } from '../services/user.service'
import { StatusCodes } from 'http-status-codes'
import { Error } from 'sequelize'
import { comparePassword } from '../helpers/passwordHelper'
import { generateToken } from '../helpers/authHelper'
import { AuthenticatedRequest } from '../middlewares/authMiddleware'
export async function signUp(req: Request, res: Response): Promise<Response> {
  try {
    await createUser(req.body)
    return res.json({
      message: 'User created successfully!',
      status: StatusCodes.CREATED
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

export async function signIn(req: Request, res: Response): Promise<Response> {
  try {
    const { email, password } = req.body
    const user = await findUser(email)

    if (!user) {
      return res.json({
        message: 'User not found!',
        status: StatusCodes.NOT_FOUND
      })
    }

    const isPasswordValid = await comparePassword(password, user.password!)

    if (!isPasswordValid) {
      return res.json({
        message: 'Bad Request',
        status: StatusCodes.BAD_REQUEST
      })
    }

    const token = generateToken(user)

    return res.json({
      message: 'Logged in successfully!',
      token: token,
      status: StatusCodes.ACCEPTED
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

export async function getUser(req: AuthenticatedRequest, res: Response): Promise<Response> {
  try {
    const user = req.user

    if (!user) {
      return res.json({
        message: 'User not found!',
        status: StatusCodes.NOT_FOUND
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
