import { Request, Response, NextFunction } from "express";

export function optionalAuth(req: Request, res: Response, next: NextFunction) {
  // Placeholder middleware for future authentication expansion
  next();
}
