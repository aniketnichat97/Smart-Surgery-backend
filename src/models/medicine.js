const sql = require("../../database.js");

const Med = function (med) {
  this.med_id = med.med_id;
  this.med_name = med.med_name;
};

Med.create = (newMed, result) => {
  sql.query("INSERT INTO medicines SET ?", newMed, (err, res) => {
    if (err) {
      console.log("error:", err);
      result(null, err);
    }
    console.log("created medicine:", { med_id: res.insertId, ...newMed });
    result(null, { med_id: res.insertId, ...newMed });
  });
};

Med.getAll = (result) => {
  console.log("in model");
  let query = "SELECT * from medicines";
  // console.log("in getall");
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error", err);
      result(null, err);
      return;
    }
    console.log("result :", res);
    result(null, res);
  });
};

Med.getMedByMedId = (med_id, result) => {
  let query = `SELECT * FROM medicines WHERE med_id = ${med_id}`;
  sql.query(query, (err, res) => {
    if (err) throw err;
    console.log("result i.e  getMed by med_id", res);
    result(null, res);
  });
};

module.exports = Med;
