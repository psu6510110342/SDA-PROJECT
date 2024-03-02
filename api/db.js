import mysql from "mysql"

export const db = mysql.createConnection({
    host: '34.142.241.134',
    user: 'root',
    password: 'Pass753951',
    database: 'testdb'
})