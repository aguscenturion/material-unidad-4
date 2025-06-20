import { Router } from "express";
import {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controllers.js";

const productRoutes = Router();

// traer todos los productos
productRoutes.get("/products", getAllProducts);

// crear un producto
productRoutes.post("/products", createProduct);

// modificar un producto
productRoutes.put("/products/:id", updateProduct);

// eliminar un producto por su id
productRoutes.delete("/products/:idProduct", deleteProduct);

export { productRoutes };

// exportacion por default = en la importacion se puede modificar el nombre

// exportacion general = en la importacion no se puede modificar el nombre
