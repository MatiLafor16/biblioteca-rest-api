import mysqlConnection from 'mysql2/promise';

const properties = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bibliotecas'
};

export const pool = mysqlConnection.createPool(properties);