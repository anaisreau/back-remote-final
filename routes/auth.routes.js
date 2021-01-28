const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/auth.controller");
const express = require('express');
const Auth = express.Router();


  // signup
  Auth.post("/signup", [verifySignUp.checkDuplicateUsernameOrEmail],  controller.signup );

  //signin 
  Auth.post("/signin", controller.signin);

module.exports = Auth

