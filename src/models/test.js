const sql = require('../../database.js');
const Test = function(test){
    this.test_id= test.test_id;
    this.name= test.name;
}
Test.getallTest = (result) =>{
    console.log("in test model");
    let query= "SELECT * from tests";
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

Test.getTestbyTestId = (test_id,result) =>{
    let query = `SELECT * FROM user WHERE test_id = ${test_id}`;
    sql.query(query, (err,res) => {
        if(err) throw err;
        console.log("result i.e  getuser by test_id", res);
        result(null,res);
    })
}

module.exports = Test;