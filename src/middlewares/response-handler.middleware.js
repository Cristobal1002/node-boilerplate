export const responseHandler = (req, res, next) => {
    res.ok = (data = null, message = 'Operación exitosa') => {
        res.status(200).json({
            success: true,
            message,
            data,
        });
    };

    res.created = (data = null, message = 'Recurso creado') => {
        res.status(201).json({
            success: true,
            message,
            data,
        });
    };

    res.badRequest = (message = 'Petición incorrecta', data = null) => {
        res.status(400).json({
            success: false,
            message,
            data,
        });
    };

    res.unauthorized = (message = 'No autorizado') => {
        res.status(401).json({
            success: false,
            message,
        });
    };

    res.forbidden = (message = 'Acceso denegado') => {
        res.status(403).json({
            success: false,
            message,
        });
    };

    res.notFound = (message = 'No encontrado') => {
        res.status(404).json({
            success: false,
            message,
        });
    };

    res.serverError = (message = 'Error interno del servidor', data = null) => {
        res.status(500).json({
            success: false,
            message,
            data,
        });
    };

    next();
};