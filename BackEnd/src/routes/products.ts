import express from "express";
import { addProduct} from "../controllers/product";
import { check } from "express-validator";
import { authenticateJWT } from "../middleware/product/authintecateToken";


const router = express.Router();

router.post(
  "/addProduct",authenticateJWT,addProduct
);



export default router;