import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from "jsonwebtoken";
import prisma from "../../lib/prisma";
import { Role } from '@prisma/client';


declare global {
    namespace Express {
      interface Request {
        userId: string;
        userRole:Role
      }
    }
  }

export const authenticateJWT = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies["auth_token"];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET as string);
    req.userId = (decoded as JwtPayload).id;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
