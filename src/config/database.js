import * as dotenv from 'dotenv';
dotenv.config();

import { Sequelize } from 'sequelize';

const dbConfig = {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    dialect: 'postgres',
        port: Number(process.env.DB_PORT) || 5432,
    pool: {
        acquire: Number(process.env.PG_POOL_ACQUIRE) || 60000,
        idle: Number(process.env.PG_POOL_IDLE) || 10000,
        max: Number(process.env.PG_POOL_MAX) || 10,
        min: Number(process.env.PG_POOL_MIN) || 0
    },
    logging: false
};

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, dbConfig);

export { sequelize };
