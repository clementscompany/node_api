import dotenv from "dotenv";
dotenv.config();

import mysql from 'mysql';

    const conn = mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USERNAME,
        password: '',
        database: process.env.DB_NAME
    });

export default conn;
