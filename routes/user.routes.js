const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");


module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
// favorites 
  app.post("/api/user/favorites/add", controller.addFavorite);

  app.delete("/api/user/favorites/delete", [authJwt.verifyToken], controller.deleteFavoris);

  app.get("/api/user/favorites/all", [authJwt.verifyToken], controller.getFavoris);


  //visios 
  app.post("/api/user/visio/add", [authJwt.verifyToken], controller.addVisio);

  app.delete("/api/user/visio/delete", [authJwt.verifyToken], controller.deleteVisio);
  
  app.get("/api/user/visio/all", [authJwt.verifyToken], controller.getVisios);


//users
  app.get("/api/user/all",  controller.allUsers);

  app.get("/api/user/:id",  controller.iduser);

  app.put("/api/user/put/:id",  controller.modifyUser);

  app.delete("/api/user/delete/:id",  controller.deleteUser);

};