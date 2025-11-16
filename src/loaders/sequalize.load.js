import {sequelize} from "../config/database.js";

export const loadDatabase = async () => {
    try {
        console.log("Conectando con PostgreSQL...");
        await sequelize.authenticate();
        console.log("Conexión a la base de datos establecida");
    } catch (e) {
        console.error("Error al cargar la base de datos:");
        console.error(e);
    }
}