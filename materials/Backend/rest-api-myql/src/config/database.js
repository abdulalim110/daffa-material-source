const mysql = require('mysql');
require('dotenv').config()

const connectionPool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
})

connectionPool.getConnection((err)=>{
  if (err){
    console.log(err)
  }
})

module.exports = {connectionPool}