import { CustomError } from "./custom.error.js";

export class IntegrationError extends CustomError {
    constructor(provider, details = null) {
        super(
            `Error al integrar con ${provider}.`,
            502,
            details,
            `https://konvex.com/errors/integration/${provider.toLowerCase()}`
        );
    }
}