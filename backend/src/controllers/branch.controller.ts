import { Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { Error } from 'sequelize'
import { AuthenticatedRequest } from '../middlewares/authMiddleware'
import { createBranch, findAllBranches } from '../services/branch.service'
import { CreateBranchDTO } from 'models/branch.model'
export async function createBranchHandler(req: AuthenticatedRequest, res: Response): Promise<Response> {
  try {
    await createBranch(req.body as CreateBranchDTO)

    return res.status(StatusCodes.CREATED).json({
      message: 'Branch created succesfully!'
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

export async function findAllBranchesHandler(req: AuthenticatedRequest, res: Response): Promise<Response> {
  try {
    const branches = await findAllBranches()

    if (!branches) {
      return res.status(StatusCodes.NOT_FOUND).json({
        message: 'Branch not found!'
      })
    }

    return res.status(StatusCodes.OK).json({
      branches: branches
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
