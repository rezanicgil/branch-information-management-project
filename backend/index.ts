import express, { Application } from 'express'
import dotenv from 'dotenv'
dotenv.config()
import Server from './src/index'

const app: Application = express()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const server: Server = new Server(app)

const PORT = process.env.NODE_DOCKER_PORT || 8080

app.listen(PORT, async () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
