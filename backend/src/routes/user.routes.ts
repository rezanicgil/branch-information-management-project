import { Router } from 'express'
import { signIn, signUp } from '../controllers/user.controller'
class AuthRoutes {
  router = Router()

  constructor() {
    this.intializeRoutes()
  }

  intializeRoutes() {
    this.router.post('/signup', signUp)
    this.router.post('/signin', signIn)
  }
}

export default new AuthRoutes().router
