import { matchesGlob } from "path";
import { Product } from "../models/product.models.js";

// interacturo con la base de datos

export const getAllProducts = async (req, res) => {
  // traeme todos los productos de la tabla products
  const products = await Product.findAll();
  res.json(products);
};

export const createProduct = async (req, res) => {
  const { name, description, price } = req.body;

  if (name === "" || description === "" || price === "") {
    return res.json({
      msg: "ninguno de los campos puede ser vacios",
    });
  }

  const product = await Product.create(req.body);

  res.status(201).json(product);
};

export const updateProduct = async (req, res) => {
  // funcionalidad para actualizar
};

export const deleteProduct = async (req, res) => {
  // funcionalidad para eliminar
};
