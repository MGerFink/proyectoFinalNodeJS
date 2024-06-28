const mysql = require('mysql2')

const pool = mysql.createPool({
    host: 'sql10.freesqldatabase.com',
    user: 'sql10714543',
    password: 'HCWEgJ3U2m',
    database: 'sql10714543',
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
})

module.exports = {
    conn: pool.promise()
}

