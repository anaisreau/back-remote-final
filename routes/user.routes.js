const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");
const express = require('express');
const User = express.Router();

// module.exports = function(app) {
//   app.use(function(req, res, next) {
//     res.header(
//       "Access-Control-Allow-Headers",
//       "x-access-token, Origin, Content-Type, Accept"
//     );
//     next();
//   });
// favorites 
  User.post("/favorites/add", controller.addFavorite);

  User.delete("/favorites/delete", [authJwt.verifyToken], controller.deleteFavoris);

  User.get("/favorites/all", [authJwt.verifyToken], controller.getFavoris);


  //visios 
  User.post("/visio/add", [authJwt.verifyToken], controller.addVisio);

  User.delete("/visio/delete", [authJwt.verifyToken], controller.deleteVisio);
  
  User.get("/visio/all", [authJwt.verifyToken], controller.getVisios);


//users
  User.get("/all",  [authJwt.verifyToken], controller.allUsers);

  User.get("/:id", [authJwt.verifyToken],  controller.iduser);

  User.put("/put/:id",  [authJwt.verifyToken], controller.modifyUser);

  User.delete("/delete/:id", [authJwt.verifyToken],  controller.deleteUser);

// };

module.exports = User