const testmodel = require('../models/test');


// get all users
exports.findallTest = (req,res) => {
    testmodel.getallTest((err,data) =>{
     if(err)
         res.status(500).send({
             message:
             err.message || "some error occured"
         });
     else
         res.send(data);
 }
 );  
 };

 //get test by testid
exports.getTestById = (req,res) =>{
    // const user_id = req.params.id;
    const test_id = req.query.test_id;
    testmodel.getTestbyTestId(test_id,(err,data) =>{
        if(err)
        res.status(500).send({
            message:
            err.message || "some error occured"
        });
        else
            res.send(data);
    });
};