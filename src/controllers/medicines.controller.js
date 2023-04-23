const medmodel = require("../models/medicine");

const express = require("express");

//create med and save med
exports.createmed = (req, res) => {
  //validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can't be empty",
    });
  }

  // create med
  const med = new medmodel({
    med_name: req.body.med_name,
    med_id: req.body.med_id,
   
  });

  // call create service
  medmodel.create(med, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "some error occured while creating med",
      });
    else res.send(data);
  });
};

// get all meds
exports.findAll = (req, res) => {
  medmodel.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "some error occured",
      });
    else res.send(data);
  });
};

//get med by medId
exports.getMedById = (req, res) => {
  // const med_id = req.params.id;
  const med_id = req.query.med_id;
  medmodel.getMedByMedId(med_id, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "some error occured",
      });
    else res.send(data);
  });
};

//update med
exports.updateMed = (req, res) => {
  //validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can't be empty",
    });
  }

  console.log(req.body);
  const med_id = req.query.med_id;
  medService.updatemedbyId(med_id, req.body, (err, data) => {
    if (err) {
      if (err.kind === "not found") {
        res.status(404).send({
          message: `Not found med with id ${med_id}`,
        });
      } else {
        res.status(500).send({
          message: " error updating med with id: " + med_id,
        });
      }
    } else res.send(data);
  });
};

//delete med by med_id
exports.removeById = (req, res) => {
  const med_id = req.query.med_id;
  // const med_id = req.params.med_id;
  console.log(med_id);
  medmodel.removeById(med_id, (err, data) => {
    if (err) {
      // console.log(err.kind);
      // console.log(typeof(err.kind));

      if (err.kind === "not found") {
        res.status(404).send({
          message: `Not found med with id ${med_id}`,
        });
      } else {
        res.status(500).send({
          message: " error deleting med with id: " + med_id,
        });
      }
    }
    // res.send("delete request successful",data);
    else
      res.status(200).send({
        message: " deleted med succesfully: " + med_id,
      });
    b;
  });
};
