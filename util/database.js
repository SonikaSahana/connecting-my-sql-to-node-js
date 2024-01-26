const mySql= require("mysql2");

const pool=mySql.createPool({
    host:'localhost',
    user:'root',
    database:'sonika',
    password:'password'
})
module.exports=pool.promise();