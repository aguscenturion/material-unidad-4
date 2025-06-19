# Guía: Conectar Express.js + MySQL con Sequelize 🧑‍💻

## ✅ Requisitos Previos

- Node.js ≥ v14
- npm (incluido con Node.js)
- MySQL server en ejecución
- Cliente MySQL como XAMPP o TablePlus

---

## 📁 Estructura del Proyecto

```bash
express-sequelize-demo/
├── config/
│   └── database.js
├── models/
│   └── product.js
├── routes/
│   └── product.route.js
├── controllers/
│   └── product.controller.js
├── db.js
├── app.js
├── package.json
└── .env
```

Agrega en `package.json`:

```json
{
  "type": "module"
}
```

---

## 1. Inicializar Proyecto

```bash
mkdir express-sequelize-demo
cd express-sequelize-demo
npm init -y
npm install express sequelize mysql2 dotenv
```

---

## 2. Variables de Entorno `.env`

```env
DB_NAME=demo_db
DB_USER=root
DB_PASSWORD=tu_password
DB_HOST=localhost
DB_DIALECT=mysql
PORT=4000
```

---

## 3. Configuración de Sequelize (`config/database.js`)

```js
import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  }
);

export default sequelize;
```

---

## 4. Modelo `Product` (`models/product.js`)

```js
import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Product = sequelize.define("Product", {
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING },
  price: { type: DataTypes.FLOAT, allowNull: false },
  stock: { type: DataTypes.INTEGER, defaultValue: 0 },
});

export default Product;
```

---

## 5. Rutas y Controladores (`routes/product.route.js`, `controllers/product.controller.js`)

```js
// controllers/product.controller.js
import Product from "../models/product.js";

export const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (product) res.json(product);
    else res.status(404).json({ message: "Producto no encontrado" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const [updated] = await Product.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedProduct = await Product.findByPk(req.params.id);
      res.json(updatedProduct);
    } else {
      res.status(404).json({ message: "Producto no encontrado" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const deleted = await Product.destroy({ where: { id: req.params.id } });
    if (deleted) res.json({ message: "Producto eliminado" });
    else res.status(404).json({ message: "Producto no encontrado" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
```

```js
// routes/product.route.js
import express from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

router.post("/", createProduct);
router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
```

---

## 6. Base de Datos (`db.js`)

```js
import sequelize from "./config/database.js";

const initDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión a MySQL establecida.");
    await sequelize.sync();
  } catch (err) {
    console.error("Error al conectar a la base de datos:", err);
  }
};

export default initDB;
```

---

## 7. Servidor Express (`app.js`)

```js
import express from "express";
import dotenv from "dotenv";
import initDB from "./db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use("/products", productRoutes);

const PORT = process.env.PORT || 4000;

initDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
});
```

---
