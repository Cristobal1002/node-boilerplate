import { CustomError } from "./custom.error.js";

export const handleServiceError = (error) => {
    console.error("Service Error:", error);

    if (error instanceof CustomError) throw error;

    const message = error.response?.data?.message || error.message || "Error interno";
    const status = error.response?.status || 500;

    const details =
        error.response?.data ||
        error.data ||
        null;

    throw new CustomError(
        message,
        status,
        details,
        "https://konvex.com/docs/errors/service-error"
    );
};