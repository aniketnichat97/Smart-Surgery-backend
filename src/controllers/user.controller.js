const usermodel = require('../models/user');

//create user and save user
exports.create = (req,res) => {
    //validate request
    if(!req.body){
        res.status(400).send({
            message : "Content can't be empty"
        });
    }
    // create user
    const user = new usermodel({
        name: req.body.name,
        email: req.body.email,
        role: req.body.role,
        password: req.body.password,
        user_id: req.body.user_id,
        doc_id: req.body.doc_id,
        phone: req.body.phone
    });
    // call create service
    usermodel.create(user,(err,data) =>{
        if(err)
            res.status(500).send({
                message:
                err.message || "some error occured while creating user"
            });
        else
            res.send(data);
    })
} 

// get all users
exports.findAll = (req,res) => {
   usermodel.getAll((err,data) =>{
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

//get user by userId
exports.getUserById = (req,res) =>{
    // const user_id = req.params.id;
    const user_id = req.query.user_id;
    usermodel.getUserByUserId(user_id,(err,data) =>{
        if(err)
        res.status(500).send({
            message:
            err.message || "some error occured"
        });
        else
            res.send(data);
    });
};


//get user by role
exports.getUserByRole = (req,res) =>{
    // const user_id = req.params.id;
    const role = req.query.role;
    console.log(role);
    usermodel.getUserByRole(role,(err,data) =>{
        if(err)
        res.status(500).send({
            message:
            err.message || "some error occured"
        });
        else
            res.send(data);
    });
};

//update user
exports.updateUser = (req,res) =>{
    //validate request
    if(!req.body){
        res.status(400).send({
            message : "Content can't be empty"
        });
    }

    console.log(req.body);
    const user_id = req.query.user_id;
    userService.updateuserbyId(user_id, req.body, (err,data) => {
        if(err){
            if(err.kind === "not found") {
                res.status(404).send({
                    message: `Not found user with id ${user_id}`
                });
            }
            else{
                res.status(500).send({
                    message :" error updating user with id: " + user_id
                });
            }
        }
            
        else
            res.send(data);
    });
}


//delete user by user_id
exports.removeById = (req,res) =>{
    const user_id = req.query.user_id;
    // const user_id = req.params.user_id;
    console.log(user_id);
    usermodel.removeById(user_id,(err,data) =>{
        if(err){
            // console.log(err.kind);
            // console.log(typeof(err.kind));

            if(err.kind === "not found") {
                res.status(404).send({
                    message: `Not found user with id ${user_id}`
                });
            }
            else{
                res.status(500).send({
                    message :" error deleting user with id: " + user_id
                });
            }
        }   
        else
            // res.send("delete request successful",data);
            res.status(200).send({
                message :" deleted user succesfully: " + user_id
            });b 
    });
}