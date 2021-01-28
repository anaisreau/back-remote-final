const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");
const express = require('express');
const User = express.Router();


  User.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

// favorites 
  User.post("/favorites/add", controller.addFavorite);

  User.delete("/favorites/delete", controller.deleteFavoris);

  User.get("/favorites/all", controller.getFavoris);


  //visios 
  User.post("/visio/add", controller.addVisio);

  User.delete("/visio/delete", controller.deleteVisio);
  
  User.get("/visio/all", controller.getVisios);


//users
  User.get("/all", controller.allUsers);

  User.get("/:id",  controller.iduser);

  User.put("/put/:id", controller.modifyUser);

  User.delete("/delete/:id",  controller.deleteUser);



module.exports = User
