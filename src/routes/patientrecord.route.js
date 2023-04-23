module.exports = app=>{
    const patientrecords= require('../controllers/patientrecord.controller');

    app.route('/createPR')
    .post(patientrecords.createpatientrecord);

    app.route('/getreportsbypid')
        .get(patientrecords.getReportByPatientId);
        
    app.route('/getmedsbypid')
        .get(patientrecords.getMedsByPatientId);
    app.route('/gettestsbypid')
        .get(patientrecords.getTestsByPatientId);
}