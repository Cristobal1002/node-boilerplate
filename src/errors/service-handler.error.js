import { CustomError } from './custom.error.js';
import { logger } from '../utils/logger.js';

export const handleServiceError = (error) => {
  logger.error({ error }, 'Service Error');

  if (error instanceof CustomError) throw error;

  const message = error.response?.data?.message || error.message || 'Error interno';
  const status = error.response?.status || 500;

  const details = error.response?.data || error.data || null;

  throw new CustomError(
    message,
    status,
    details,
    'https://mordcai.com/docs/errors/service-error'
  );
};