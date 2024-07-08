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

    const accessToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, { expiresIn: "1d" });
    const refreshToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, { expiresIn: "7d" });

    const newRefreshToken = await prisma.refreshToken.create({
      data:<RefreshToken> {
        userId: user.id,
        refreshToken: refreshToken,
        accessToken: accessToken,
      },
    });

    return res.status(200).json({
      refreshToken,
      accessToken,
      accessTokenUpdatedAt: new Date().toLocaleString(),
      user:{
        name:user.name,
        role:user.role
      }
    });
  } catch (err: any) {
    logger.error(`Error occurred while signing in user: ${err.message}`);
    return res.status(500).json({ message: "Something went wrong" });
  }
};


export const validateUser =(req:Request,res:Response) =>{
  res.status(200).send({id:req.userId})
}


export const logout = async (req: Request, res: Response) => {
  const { refreshToken } = req.body;
  const accessToken = req.headers.authorization?.split(" ")[1];

  try {
    // Find the associated refresh token for the access token
    const tokenPair = await prisma.refreshToken.findFirst({
      where: {
        accessToken: accessToken,
        refreshToken: refreshToken,
      },
    });

    if (!tokenPair) {
      return res.status(401).json({ message: "Invalid refresh token" });
    }

    // Remove the access and refresh tokens from the database
    await prisma.refreshToken.delete({
      where: {
        id: tokenPair.id,
      },
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