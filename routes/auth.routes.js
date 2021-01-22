const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/auth.controller");
const express = require('express');
const app = express();
app.use(cors())

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  // signup
  app.post("/api/auth/signup", [verifySignUp.checkDuplicateUsernameOrEmail],  controller.signup );

  //signin 
  app.post("/api/auth/signin", controller.signin);

};