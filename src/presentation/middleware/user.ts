import { NextFunction, Request, Response } from "express";

export function UserMiddlewareQueryParams (req: Request, res: Response, next: NextFunction) {

  const query = req.query;
  const value = query.term;

  return (value === undefined || value === null) ? res.status(500).json({ message: `provide a valid 'term' argument in the parameters`, errors: true}) : next()

}