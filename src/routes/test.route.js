module.exports = app=>{
    const tests= require('../controllers/test.controller');

    app.route('/tests')
    .get(tests.findallTest);

    app.route('/testid')
    .get(tests.getTestById);
}