const mysql =require('mysql');
const config = require('config')
// const express = require('express');
const connection = mysql.createConnection({
    // connectionLimit : 10,
    host:config.get("database.host"),
    port: config.get("database.port"),
    user:config.get("database.user"),
    password:config.get("database.password"),
    database: config.get("database.database")

});

connection.connect(
    function(err) {
        if(err) throw err;
        console.log("connected")
        // connection.release();
    }


);
module.exports =connection;