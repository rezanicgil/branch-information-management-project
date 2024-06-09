import { Application } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import Routes from './routes'
import bodyParser from 'body-parser'

dotenv.config()

import Database from './database'

export default class Server {
  constructor(app: Application) {
    this.config(app)
    this.syncDatabase()
    new Routes(app)
  }

  private config(app: Application): void {
    const corsOptions = {
      origin: process.env.CLIENT_ORIGIN || 'http://localhost:3000'
    }

    app.use(cors(corsOptions))
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
  }

  private syncDatabase(): void {
    const db = new Database()
    db.sequelize?.sync()
  }
}
