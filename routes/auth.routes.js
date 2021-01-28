const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/auth.controller");
const express = require('express');
const Auth = express.Router();

Auth.use(function(req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept",
    'Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS'

  );
  next();
});
  // signup
  Auth.post("/signup", [verifySignUp.checkDuplicateUsernameOrEmail],  controller.signup );

  //signin 
  Auth.post("/signin", controller.signin);

module.exports = Auth

