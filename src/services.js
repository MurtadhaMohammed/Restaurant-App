var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("./data.sql");


export const getItems = function (status, callback) {
    //db.all(...
    //callback(err,data) // if err return callback(err, null) els return (err, null)
};

export const createItems = function (data, callback) { 
    // data = {...}
    //db.run(...)
     //callback(err,data) // if err return callback(err, null) els return (err, null)
};

export const updateItems = function (id, data, callback) { 
    //id = number
    // data = {...}
    //db.run(...)
     //callback(err,data) // if err return callback(err, null) els return (err, null)
};

export const changeStatusItems = function (id, callback) { 
    //id = number
    //db.run(...)
     //callback(err,data) // if err return callback(err, null) els return (err, null)
};

export const deleteItems = function (id, callback) { 
    //id = number
    //db.run(...)
     //callback(err,data) // if err return callback(err, null) els return (err, null)
};



// run this functions by test file 
//import { deleteItems, changeStatusItems ,... } from '../services'