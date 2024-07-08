import express from "express";
import { addProduct} from "../controllers/product";



const router = express.Router();

router.post(
  "/addProduct",addProduct
);



export default router;