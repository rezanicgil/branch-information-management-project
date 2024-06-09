import { Application } from 'express'
import homeRoutes from './home.routes'
import userRoutes from './user.routes'

export default class Routes {
  constructor(app: Application) {
    app.use('/', homeRoutes)
    app.use('/api/user', userRoutes)
  }
}
