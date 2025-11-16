import { CustomError } from "./custom.error.js";

export class RequestValidationError extends CustomError {
    constructor(errors) {
        super(
            "Error de validación",
            400,
            errors,
            "https://konvex.com/docs/errors/validation-error"
        );

        this.errors = errors;
    }

    serialize() {
        return {
            type: this.type,
            title: "Los datos enviados no son válidos",
            status: this.statusCode,
            invalidParams: this.errors.map((x) => ({
                field: x.param,
                message: x.msg,
                location: x.location,
                value: x.value
            })),
        };
    }
}