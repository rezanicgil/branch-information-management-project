import { Application } from 'express'
import homeRoutes from './home.routes'
import userRoutes from './user.routes'
import branchRoutes from './branch.routes'

export default class Routes {
  constructor(app: Application) {
    app.use('/', homeRoutes)
    app.use('/api/user', userRoutes)
    app.use('/api/branch', branchRoutes)
  }
}
