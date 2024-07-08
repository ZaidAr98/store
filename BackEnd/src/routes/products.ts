import express from "express";
import { addProduct, getProducts} from "../controllers/product";
import { adminRole } from "../middleware/product/adminRole";



const router = express.Router();

router.post(
  "/addProduct",adminRole,addProduct
);
router.get("/",getProducts)


export default router;