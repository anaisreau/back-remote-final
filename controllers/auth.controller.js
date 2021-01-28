const db = require("../models");
const User = db.user;


var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

const  secret= "anaisnananasecretkey"


exports.signup = (req, res) => {


  // Save User to Database
  User.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    phone: req.body.phone,
    description: req.body.description,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    roleId : req.body.roleId
  }).then(() => {
        res.send({ message: "Utilisateur enregistré avec succès" });  
  })
  .catch(err => {
    res.status(500).send({ message: err.message });
  });
}

exports.signin = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).json({ message: "Utilisateur Inconnu" });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).json({
          accessToken: null,
          message: "Mot de passe invalide "
        });
      }

      var token = jwt.sign({ id: user.id }, secret, {
        expiresIn: 86400 // 24 hours
      });

        res.status(200).send({
          id: user.id,
          firstname: user.firstname,
          email: user.email,
          accessToken: token,
          roleId : user.roleId
        });
      
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
};

