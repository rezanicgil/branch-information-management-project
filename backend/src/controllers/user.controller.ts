import { Request, Response } from 'express'
import { createUser } from '../services/user.service'
import { StatusCodes } from 'http-status-codes'
import { Error } from 'sequelize'
export async function signup(req: Request, res: Response): Promise<Response> {
  try {
    const user = await createUser(req.body)

    console.log(user)
    return res.json({
      message: 'User created successfully!',
      status: StatusCodes.CREATED
    })
  } catch (error) {
    const err = error as Error

    console.log(err)
    return res.json({
      message: 'Internal Server Error!',
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      error: err.message.split('\n')
    })
  }
}
