import { Router } from 'express'
import {
  findAllBranchesHandler,
  createBranchHandler,
  findOneBranchHandler,
  updateBranchHandler
} from '../controllers/branch.controller'
import { authMiddleware, isOwner } from '../middlewares/authMiddleware'
class BranchRoutes {
  router = Router()

  constructor() {
    this.intializeRoutes()
  }

  intializeRoutes() {
    this.router.get('/', authMiddleware, findAllBranchesHandler)
    this.router.post('/', authMiddleware, isOwner, createBranchHandler)
    this.router.post('/:id', authMiddleware, isOwner, createBranchHandler)
    this.router.patch('/:id', authMiddleware, isOwner, updateBranchHandler)
    this.router.get('/:id', authMiddleware, findOneBranchHandler)
  }
}

export default new BranchRoutes().router
