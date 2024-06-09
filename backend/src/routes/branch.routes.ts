import { Router } from 'express'
import { findAllBranchesHandler, createBranchHandler } from '../controllers/branch.controller'
import { authMiddleware, isOwner } from '../middlewares/authMiddleware'
class BranchRoutes {
  router = Router()

  constructor() {
    this.intializeRoutes()
  }

  intializeRoutes() {
    this.router.get('/', authMiddleware, findAllBranchesHandler)
    this.router.post('/', authMiddleware, isOwner, createBranchHandler)
  }
}

export default new BranchRoutes().router
