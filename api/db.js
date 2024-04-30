import mysql  from 'mysql'

export const db = mysql.createConnection({
    host:"localhost:3306",
    user:"root",
    password:"Root1234",
    database:"blog",


})