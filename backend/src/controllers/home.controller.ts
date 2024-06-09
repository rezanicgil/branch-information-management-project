import { Request, Response } from "express";

export function healtcheck(req: Request, res: Response): Response {
  return res.json({ message: "Server is runnig!" });
}