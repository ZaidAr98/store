import express, { Request, Response } from "express";
import { validationResult } from "express-validator";

import { Role, UserType } from "../models/user";
import prisma from "../lib/prisma";
import bcrypt from "bcryptjs";

export const register = async (req: Request, res: Response) => {
  // Apply validation middleware
  const { name, email, password } = req.body;
  let emailDomain = email.split("@")[0];

  const role: Role =
    emailDomain === process.env.ADMIN_EMAIL ? Role.Admin : Role.General;
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
      data:{
        name,
        email,
        password: bcrypt.hashSync(password, 8),
        role,
      },
    });

    return res
      .status(201)
      .send({ success: true, message: "User registered successfully" })
      .json({
        newUser
      })
  } catch (error:any) {
    console.error(error);
    return res
      .status(400)
      .send({
        success: false,
        message: "User not added",
        error: error.message,
      });
  }
};

