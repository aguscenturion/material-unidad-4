import { sequelize } from "./database";

// testiar la conexion
export const startDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexion exitosa.");
  } catch (error) {
    console.error("No se pudo conectar a la db:", error);
  }
};
