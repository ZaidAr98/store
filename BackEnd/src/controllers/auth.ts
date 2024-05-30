import express, { Request, Response } from "express";
import {UserType} from "../models/user";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";
import prisma from "../lib/prisma";
import bcrypt from "bcryptjs"

export const Login = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: errors.array() });
  }

  const { email, password } = req.body;
  try {
    const user = await prisma.user.findFirst({ where: { email }});
    if(!user){
        return res.status(400).json({message:"the email already"})

    }
    const isMatch = await bcrypt.compare(password,user.password)
    if(!isMatch){
            return res.status(400).json({ message: "wrong password" });
    }  
    const token = jwt.sign(
      { userId: user.id },
        process.env.JWT_SECRET_KEY as string,
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
} catch (error) {
    console.log(error);
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