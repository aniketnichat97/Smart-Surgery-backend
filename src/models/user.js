const sql = require('../../database.js');

const User = function(user){
    this.name = user.name;
    this.email = user.email;
    this.phone = user.phone;
    this.password = user.password;
    this.role = user.role;
    this.doc_id = user.doc_id;
    this.user_id = user.user_id;
};

User.create = (newUser, result) =>{  
    sql.query("INSERT INTO user SET ?", newUser, (err,res) =>{
        if(err){
            console.log("error:",err);
            result(null,err);
        }
        console.log("created users:", {user_id : res.insertId, ...newUser});
        result(null,{user_id : res.insertId,...newUser})
    });
    // }
}

User.getAll = (result) => {
    console.log("in model");
    let query= "SELECT * from user";
    // console.log("in getall");
    sql.query(query, (err,res) =>{
        if(err){
            console.log("error",err);
            result(null,err);
            return
        }
        console.log("result :",res);
        result(null,res);
    })
}

User.getUserByUserId = (user_id,result) =>{
    let query = `SELECT * FROM user WHERE USER_ID = ${user_id}`;
    sql.query(query, (err,res) => {
        if(err) throw err;
        console.log("result i.e  getuser by user_id", res);
        result(null,res);
    })
}

User.getUserByRole = (role,result) =>{
    let query = `SELECT * FROM user WHERE role = ${role}`;
    sql.query(query, (err,res) => {
        if(err) throw err;
        console.log("result i.e  getuser by role", res);
        result(null,res);
    })
}

module.exports = User;