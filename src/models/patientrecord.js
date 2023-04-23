const sql = require("../../database.js");
const PatientRecord = function (patientrecord) {
    this.med_id = patientrecord.med_id;
    this.patient_id = patientrecord.patient_id;
    this.test_id = patientrecord.test_id;
    this.report_link = patientrecord.report_link;
  };

  PatientRecord.create = (newPatientRecord, result) => {
    sql.query("INSERT INTO patient_records SET ?", newPatientRecord, (err, res) => {
      if (err) {
        console.log("error:", err);
        result(null, err);
      }
      console.log("created PR:", {...newPatientRecord});
      result(null, {...newPatientRecord});
    });
  };

  PatientRecord.getReportByPatientId = (patient_id,result) =>{
    let query = `SELECT report_link FROM patient_records WHERE patient_id = ${patient_id}`;
    sql.query(query, (err,res) => {
        if(err) throw err;
        // console.log("result i.e  get report links", res);
        console.log("result i.e  get report links", res);
        result(null,res);
    })  
}
PatientRecord.getMedsByPatientId = (patient_id,result) =>{
  let query = `SELECT m.med_id,m.med_name FROM patient_records p
                join medicines m
                on m.med_id=p.med_id 
                WHERE p.patient_id = ${patient_id}`;
  sql.query(query, (err,res) => {
      if(err) throw err;
      // console.log("result i.e  get report links", res);
      console.log("result i.e  get report links", res);
      result(null,res);
  })  
}
PatientRecord.getTestsByPatientId = (patient_id,result) =>{
  let query = `SELECT t.test_id,t.name FROM patient_records p
                join tests t
                on t.test_id=p.test_id 
                WHERE p.patient_id = ${patient_id}`;
  sql.query(query, (err,res) => {
      if(err) throw err;
      // console.log("result i.e  get report links", res);
      console.log("result i.e  get report links", res);
      result(null,res);
  })  
}

module.exports = PatientRecord;