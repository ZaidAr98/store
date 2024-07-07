import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
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
  const token = req.body.user.role

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);

    const user = await prisma.user.findUnique({ where: { id: decoded.id } });

    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    req.userId = user.id;
    req.userRole = user.role;

 
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
