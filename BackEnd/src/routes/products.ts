import express from "express";
import { addProduct} from "../controllers/product";
import { adminRole } from "../middleware/product/adminRole";



const router = express.Router();

router.post(
  "/addProduct",adminRole,addProduct
);



export default router;