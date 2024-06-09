import { Request, Response } from 'express'

export function healtCheck(req: Request, res: Response): Response {
  return res.json({ message: 'Server is runnig!' })
}
