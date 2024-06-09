import { Router } from 'express'
import { healtcheck } from '../controllers/home.controller'

class HomeRoutes {
  router = Router()

  constructor() {
    this.intializeRoutes()
  }

  intializeRoutes() {
    this.router.get('/', healtcheck)
  }
}

export default new HomeRoutes().router
