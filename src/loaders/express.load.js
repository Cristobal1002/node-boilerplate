import express from "express";
import cors from "cors";
import {routes} from "../routes/index.js";
import {responseHandler} from "../middlewares/index.js";
import {errorHandlerMiddleware} from "../middlewares/index.js";
export const loadExpress = (app) => {

    const port = process.env.SERVER_PORT || 3000;

    app.use(cors({
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization', 'x-app-token']
    }));

    app.use(express.json({ limit: '20mb' }));
    app.use(express.urlencoded({ extended: true, limit: '20mb' }));


    app.use(responseHandler);
    routes(app);
    app.use(errorHandlerMiddleware.errorHandler);

};