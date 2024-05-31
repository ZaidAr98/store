import express from "express"
import { register } from "../controllers/user"
import {check } from "express-validator";

const router = express.Router()

router.post('/register',[check("firstName","First Name is required").isString(),
check("lastName","Last Name is required").isString(),
check("phoneNumber","Phone Number  is required").isString(),
check("email","Email is required").isEmail(),
check("password","password with 5 or more characters required").isLength({min:5})
], register )


export default router