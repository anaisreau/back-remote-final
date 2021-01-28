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
  User.post("/api/user/favorites/add", controller.addFavorite);

  User.delete("/api/user/favorites/delete", [authJwt.verifyToken], controller.deleteFavoris);

  User.get("/api/user/favorites/all", [authJwt.verifyToken], controller.getFavoris);


  //visios 
  User.post("/api/user/visio/add", [authJwt.verifyToken], controller.addVisio);

  User.delete("/api/user/visio/delete", [authJwt.verifyToken], controller.deleteVisio);
  
  User.get("/api/user/visio/all", [authJwt.verifyToken], controller.getVisios);


//users
  User.get("/api/user/all",  [authJwt.verifyToken], controller.allUsers);

  User.get("/api/user/:id", [authJwt.verifyToken],  controller.iduser);

  User.put("/api/user/put/:id",  [authJwt.verifyToken], controller.modifyUser);

  User.delete("/api/user/delete/:id", [authJwt.verifyToken],  controller.deleteUser);

// };

module.exports = User