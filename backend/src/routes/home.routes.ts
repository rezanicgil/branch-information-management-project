import { Router } from 'express'
import { healtCheck } from '../controllers/home.controller'

class HomeRoutes {
  router = Router()

  constructor() {
    this.intializeRoutes()
  }

  intializeRoutes() {
    this.router.get('/', healtCheck)
  }
}

export default new HomeRoutes().router
