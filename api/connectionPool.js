const mysql = require('mysql2');

// Create the connection pool. The pool-specific settings are the defaults
function getPool() { 
    return mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: 'Admin9984*9',
        database: 'dbmaster',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    })
}

exports.getPool = getPool;