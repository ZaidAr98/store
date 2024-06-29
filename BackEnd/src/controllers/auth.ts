import express, { Request, Response } from "express";
import {UserType} from "../models/user";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";
import prisma from "../lib/prisma";
import bcrypt from "bcryptjs"
import logger from "../utils/logger";

export const Login = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: errors.array() });
  }

  const { email, password } = req.body;
  logger.info("User attempting to sign in");
  try {
    const user = await prisma.user.findFirst({ where: { email }});
    if(!user){
        logger.error("User not found");
        return res.status(400).json({message:"the email hasn't been found"})

    }
    const isMatch = await bcrypt.compare(password,user.password)
    if(!isMatch){
             logger.error("Invalid credentials");
            return res.status(400).json({ message: "Invalid credentials" });
    }  
    const token = jwt.sign(
      { userId: user.id },
        process.env.JWT_SECRET as string,
      {
        expiresIn: "1d",
      }
    );
    res.cookie("auth_token",token,{
        httpOnly:true,
        secure:process.env.NODE_ENV ==="production",
        maxAge : 86400000
    });
    res.status(200).json({message:"login successfully"})
} catch (err:any) {
   
  logger.error(`Error occurred while signing in user: ${err.message}`);
    res.status(500).json({ message: "Something went wrong" });
  }
};


export const validateUser =(req:Request,res:Response) =>{
  res.status(200).send({id:req.body.id})
}


export const logout = (req:Request,res:Response)  =>{
res.cookie("auth_token","",{
    expires: new Date(0),

})
res.status(200).send({message:"logout successfully"})

}