import { Sequelize } from "sequelize";
import "dotenv/config";

// establecemos la conexion
export const sequelize = new Sequelize("test_database", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

// testeamos la conexion
export const startDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexion exitosa.");
    await sequelize.sync();
  } catch (error) {
    console.error("No se pudo conectar a la db:", error);
  }
};
