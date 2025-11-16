import {CustomError} from "../errors/index.js";
export const errorHandler = (err, req, res, next) => {
    console.error("Error capturado:", err);

    if (err instanceof CustomError) {
        const serialized = err.serialize();
        return res.status(err.statusCode).json(serialized);
    }

    return res.status(500).json({
        type: "about:blank",
        title: "Error interno del servidor",
        status: 500,
        details: {
            message: err.message,
            stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
        }
    });
};