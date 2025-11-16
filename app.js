import * as dotenv from "dotenv";
dotenv.config();

import { startServer } from "./src/server.js";

process.on("uncaughtException", (err) => {
    console.error("Uncaught Exception:", err);
});

process.on("unhandledRejection", (reason) => {
    console.error("Unhandled Rejection:", reason);
});

startServer().then();