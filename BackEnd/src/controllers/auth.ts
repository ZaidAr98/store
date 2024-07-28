import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";
import prisma from "../lib/prisma";
import bcrypt from "bcryptjs"
import logger from "../utils/logger";
import { RefreshToken } from "@prisma/client";

export const Login = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: errors.array() });
  }

  const { email, password } = req.body;
  logger.info("User attempting to sign in");

  try {
    const user = await prisma.user.findFirst({ where: { email }});
    if (!user) {
      logger.error("User not found");
      return res.status(400).json({ message: "The email hasn't been found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      logger.error("Invalid credentials");
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const accessToken = jwt.sign({ id: user.id,role:user.role}, process.env.JWT_SECRET as string, { expiresIn: "1d" });
    // const refreshToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, { expiresIn: "7d" });

   
   
    res.cookie("auth_token", accessToken, {
      httpOnly: true,
      maxAge: 86400000,
    });
    res.status(200).json({ userId: user.id,role:user.role});
  } catch (err: any) {
    logger.error(`Error occurred while signing in user: ${err.message}`);
    return res.status(500).json({ message: "Something went wrong" });
  }
};


export const validateUser =(req:Request,res:Response) =>{
  res.status(200).send({id:req.userId})
}


export const logout = async (req: Request, res: Response) => {
 

  try {
    res.cookie("auth_token", "", {
      expires: new Date(0),
    });
    return res.status(200).json({
      success: true,
      message: "Logout successful",
    });
  } catch (err: any) {
    logger.error(`Error occurred during logout: ${err.message}`);
    return res.status(500).json({ message: "Internal server error" });
  }
};