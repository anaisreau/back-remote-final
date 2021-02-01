
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
    return id,
    next();
  });
};


getUserId = (req) => {
  let user_ID = -1;
  let token = req.headers["x-access-token"];
  if(token != null) {
    try {
      let jwtToken = jwt.verify(token, secret);
      if(jwtToken != null)
        user_ID = jwtToken.user_ID;
    } catch(err) { }
  }
  return user_ID;
}
  



const authJwt = {
  verifyToken: verifyToken,
  getUserId : getUserId
};
module.exports = authJwt;