import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";

import { UserType } from "../models/user";
import prisma from "../lib/prisma";
import bcrypt from "bcryptjs"




export const register = async (req: Request, res: Response) => {
    // Apply validation middleware
    const { firstName,lastName,phoneNumber,email,password} = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ message: errors.array() });
    }

    try {
        // Check if user already exists
        const user = await prisma.user.findFirst({
            where: { email: req.body.email },
        });

        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Create new user
        const newUser = await prisma.user.create({
            data:<UserType> {
                firstName,
                lastName,
                phoneNumber,
                email,
                password:bcrypt.hashSync(password, 8)
              },
            
        });

        // Generate JWT token
        const token = jwt.sign({ userId: newUser.id }, process.env.JWT_SECRET as string, {
            expiresIn: "1d"
        });

        // Set JWT token as a cookie
        res.cookie("auth_token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 86400000
        });
        // res.json(newUser)
        return res.status(201).send({ message: "User registered successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: "Something went wrong" });
    }
}



export const updateUser = async(req:Request,res:Response)=>{
    try {
        
    } catch (error) {
        
    }
}