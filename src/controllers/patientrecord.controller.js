const patientrecordmodel = require('../models/patientrecord');


//create user and save user
exports.createpatientrecord = (req,res) => {
    //validate request
    if(!req.body){
        res.status(400).send({
            message : "Content can't be empty"
        });
    }
    // create user
    const patientrecord = new patientrecordmodel({
        patient_id: req.body.patient_id,
        test_id: req.body.test_id,
        med_id: req.body.med_id,
        report_link: req.body.report_link
    });
    // call create service
    patientrecordmodel.create(patientrecord,(err,data) =>{
        if(err)
            res.status(500).send({
                message:
                err.message || "some error occured while creating user"
            });
        else
            res.send(data);
    })
};

//get links by patient id
exports.getReportByPatientId = (req,res) =>{
    // const user_id = req.params.id;
    const patient_id = req.query.patient_id;
    // console.log(patient_id);
    patientrecordmodel.getReportByPatientId(patient_id,(err,data) =>{
        if(err)
        res.status(500).send({
            message:
            err.message || "some error occured"
        });
        else
            res.send(data);
    });
};


//get meds by patient id
exports.getMedsByPatientId = (req,res) =>{
    // const user_id = req.params.id;
    const patient_id = req.query.patient_id;
    // console.log(patient_id);
    patientrecordmodel.getMedsByPatientId(patient_id,(err,data) =>{
        if(err)
        res.status(500).send({
            message:
            err.message || "some error occured"
        });
        else
            res.send(data);
    });
};

//get tests by patient id
exports.getTestsByPatientId = (req,res) =>{
    // const user_id = req.params.id;
    const patient_id = req.query.patient_id;
    // console.log(patient_id);
    patientrecordmodel.getTestsByPatientId(patient_id,(err,data) =>{
        if(err)
        res.status(500).send({
            message:
            err.message || "some error occured"
        });
        else
            res.send(data);
    });
};