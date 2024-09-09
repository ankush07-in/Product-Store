import express from "express";

import { createProduct, deleteProduct, getAllProducts, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getAllProducts);
router.post("/", createProduct);
router.delete("/:id", deleteProduct);
router.put("/:id", updateProduct);

// console.log(process.env.MONGO_URI);

export default router;