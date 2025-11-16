import { CustomError } from "./custom.error.js";

export class NotFoundError extends CustomError {
    constructor(resource = "Recurso") {
        super(`${resource} no encontrado.`, 404, null, "https://konvex.com/errors/not-found");
    }
}

export class UnauthorizedError extends CustomError {
    constructor(message = "Autenticación requerida.") {
        super(message, 401, null, "https://konvex.com/errors/unauthorized");
    }
}

export class ForbiddenError extends CustomError {
    constructor(message = "No tienes permisos para esta acción.") {
        super(message, 403, null, "https://konvex.com/errors/forbidden");
    }
}

export class ConflictError extends CustomError {
    constructor(message = "Conflicto en el estado actual del recurso.") {
        super(message, 409, null, "https://konvex.com/errors/conflict");
    }
}

export class DatabaseError extends CustomError {
    constructor(details) {
        super("Error en la base de datos.", 500, details, "https://konvex.com/errors/database");
    }
}