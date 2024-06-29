import express from "express"
import { register } from "../controllers/user"
import addUserValidator from "../middleware/user/addUserValidator"
const router = express.Router()

router.post('/register',addUserValidator,register )


export default router