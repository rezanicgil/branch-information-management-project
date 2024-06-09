import { Router } from 'express'
import { getUser, signIn, signUp } from '../controllers/user.controller'
import { authMiddleware } from '../middlewares/authMiddleware'
class AuthRoutes {
  router = Router()

  constructor() {
    this.intializeRoutes()
  }

  intializeRoutes() {
    this.router.post('/signup', signUp)
    this.router.post('/signin', signIn)
    this.router.get('/me', authMiddleware, getUser)
  }
}

export default new AuthRoutes().router
