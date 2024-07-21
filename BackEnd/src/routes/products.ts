import express from "express";
import { addProduct, deleteProduct, getProducts, updateProduct} from "../controllers/product";
import { adminRole } from "../middleware/product/adminRole";
import multer from "multer";


const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
});
router.post(
  "/addProduct",adminRole,upload.array("imagesFiles",1),addProduct
);
router.get("/",getProducts)
router.put("/:productId",adminRole,upload.array("imagesFiles",1),updateProduct)
router.delete("/:productId",adminRole,deleteProduct)

export default router;