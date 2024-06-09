import { Router } from 'express'
import { signup } from '../controllers/user.controller'
class AuthRoutes {
  router = Router()

  constructor() {
    this.intializeRoutes()
  }

  intializeRoutes() {
    this.router.post('/signup', signup)
  }
}

export default new AuthRoutes().router
