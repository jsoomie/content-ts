import { Request, Response, NextFunction } from "express";

export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.send("Not permitted").status(403);
};
