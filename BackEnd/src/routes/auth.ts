import express from "express";
import { Login, logout, validateUser} from "../controllers/auth";
import { check } from "express-validator";
import { authenticateJWT } from "../middleware/auth/authintecateToken";


const router = express.Router();

router.post(
  "/login",
  [
    check("email", "Email is required").isEmail(),
    check("password", "password with 5 or more characters required").isLength({
      min: 5,
    }),
  ],
Login
);
router.get("/validate-token",authenticateJWT,validateUser)
router.post("/logout", logout);

export default router;