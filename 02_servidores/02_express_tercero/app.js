import express from "express";
import { data } from "./database.js";

const app = express();
const PORT = 3004;

app.get("/api/characters", (req, res) => {
  res.status(200).json(data);
});

app.get("/api/characters/:id", (req, res) => {
  const { id } = req.params;
});

app.use((req, res) => {
  res.status(404).json({
    status: 404,
    message: "Not Found",
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
