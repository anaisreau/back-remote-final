
const jwt = require("jsonwebtoken");
const db = require("../models");
const User = db.user;

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
    req.id = decoded.user_id;
    next();
  });
};



const authJwt = {
  verifyToken: verifyToken,
};
module.exports = authJwt;