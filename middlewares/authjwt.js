
const jwt = require("jsonwebtoken");
const db = require("../models");

const  secret= "anaisnananasecretkey"

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Mot de passe invalide"
      });
    }
    req.id = decoded.id;
    next();
  });
};


getUserId = (req) => {

var token = req.headers["x-access-token"];
var decoded = jwt_decode(token);
 
return decoded.id ;
}
  



const authJwt = {
  verifyToken: verifyToken,
  getUserId : getUserId
};
module.exports = authJwt;