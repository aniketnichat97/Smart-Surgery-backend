
module.exports = app =>{
  const users = require('../controllers/user.controller');

  var router = require("express").Router();

  //get all users
  // router.get("/", users.findAll);
  // router.get("/api","")

  app.route('/user')
    .get(users.findAll);
  
  app.route('/userid')
    .get(users.getUserById);

  app.route('/create')
    .post(users.create);

  app.route('/getbyrole')
    .get(users.getUserByRole);  

}