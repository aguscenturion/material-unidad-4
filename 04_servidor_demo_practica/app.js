import express from "express";

// hay dos formas para leer variables de entornos con dotenv
// forma 1 con dotenv
// import dotenv from "dotenv";
// dotenv.config();

// forma 2 con dotenv
import "dotenv/config";
import { productRoutes } from "./src/routes/product.routes.js";
import { startDb } from "./src/config/database.js";

// forma de leer variables de entorno nativamente
// process.loadEnvFile();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/api", productRoutes);

app.listen(PORT, async () => {
  await startDb();
  console.log("servidor listo en el puerto " + PORT);
});
