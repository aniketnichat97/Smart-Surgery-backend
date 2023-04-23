module.exports = (app) => {
  const med = require("../controllers/medicines.controller");

  var router = require("express").Router();

  app.route("/med").get(med.findAll);

  app.route("/medbyid").get(med.getMedById);

  app.route("/createmed").post(med.createmed);
};
