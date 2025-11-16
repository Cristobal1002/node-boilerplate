import express from "express";
import dotenv from "dotenv";
import { loadExpress } from "./loaders/express.load.js";
import { loadDatabase } from "./loaders/sequalize.load.js";

dotenv.config();

export const startServer = async () => {
    const PORT = process.env.PORT || 3000;
    const app = express();

    // Cargar DB
    await loadDatabase();

    // Cargar middlewares, rutas, JSON, CORS
    loadExpress(app);

    try {
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en puerto ${PORT}`);
        });
    } catch (e) {
        console.error('No se pudo levantar el servidor', e);
        process.exit(1);
    }

};