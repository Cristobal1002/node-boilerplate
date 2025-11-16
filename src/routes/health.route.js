import express from "express";
import {ForbiddenError, IntegrationError, NotFoundError} from "../errors/index.js";

export const health = express.Router()

health.get('/', async (req, res, next) => {
    res.json('OK')
} )

health.get('/not-found', async () =>{
    throw new NotFoundError("Property");
})

health.get('/forbidden', async () =>{
    throw new ForbiddenError("Acceso denegado a recurso");
})

health.get('/integration', async () =>{
    throw new IntegrationError("Shopify", { detail: "Invalid credentials" });
})

health.get('/boom', async () =>{
    throw new Error("Explosión interna 😅");
})