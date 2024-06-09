import express, { Application, Express, Request, Response } from 'express'

import Server from './src/index'

const app: Application = express()
const server: Server = new Server(app)

const PORT: number = process.env.NODE_DOCKER_PORT ? parseInt(process.env.NODE_DOCKER_PORT, 10) : 8080

app.listen(PORT, async () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
