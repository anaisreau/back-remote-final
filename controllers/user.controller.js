// const Visioconference = require("../models/Visioconference");
// const User = require('../models/user.model');
// const {Contenu} = require ('../models/Contenu');
// const { user } = require("../models");
// const {FavoriteContenu}= require('../models/favorite_contenu')
// const {user_visio} = require ('../models/user_visios')

const { role } = require('../models')
const db = require ('../models')
const user = db.user
const favorite = db.FavoriteContenu
const visio= db.user_visio
const contenu=db.Contenu

exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  
  exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
  };
  
  exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };
  
  exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
  };

  exports.allUsers= (req, res)=> {
    user
    .findAll({
      include: role
    })
    .then(x => res.json(x))
}


exports.iduser = (req, res)=> {
  user
  .findOne({
    where: { user_id : req.params.id },
   
  })
  .then(x => res.json(x))
}

exports.modifyUser = (req, res)=> {

  const apiId = req.params.id;

  const {firstname, lastname, email, password, phone, description, roleId, avatar} = req.body;

 user.update({
   avatar : avatar,
   firstname : firstname,
   lastname :  lastname,
   email :  email,
   password : password,
   phone : phone,
   description : description,
   roleId : roleId
},{
      where: {
          user_id : apiId
      }
  })
  .then(res.status(201).json({
      error: false,
      message: 'Api updated.'
  }))
  .catch(error => res.json({
      error: true,
      error: error
  }));
}

// delete user from its id 
exports.deleteUser = (req, res)=> {
    user
  .destroy({
    where : {
     user_id: req.params.id
    }
  }).then(function(){
    res.send('User supprimé avec succès')
  })
  }


  

  // add favorite contenu
     
  exports.addFavorite = (req, res) => {

    //Params
    const contenu_id = Number(req.body.contenu_id)
    const contenu_name = req.body.name
    const contenu_photo = req.body.photo
    const user_id = req.body.user_id

    models
      .FavoriteHorses
      .create({
        userid : user_id,
        contenuid: contenu_id,
        contenu_name : contenu_name,
        contenu_photo : contenu_photo,
      })
      .then(res.status(200).send(`Le contenu a bien été ajouté aux favoris ! `))

};


// delete favorite contenu
     exports.deleteFavoris = (req, res) => {
        favorite
        .destroy({
          where: {
            userid : req.userid,
            contenuid : req.contenuid}
        })
        .then(res.status(200).send("Le contenu a bien été supprimé de vos favoris"))
        .catch((err) => res.status(500).json({ 'error': `Impossible de supprimer le contenu` }));
      }

// display all favoris 
          exports.getFavoris = (req, res) => {
            favorite
            .findAll({
              where: { userid : userid}
            })
            .then(item => {
              if (item) {
                res.json(item) } 
              else {
                res.status(400).json({'error' : 'Aucun contenu favori'})
                }
            })
          }
        

 // add visio
 exports.addVisio = (req, res) => {
  visio
  .create({
    userid: req.userid,
    visioid: req.body.visioid,
  })
  .then(res.status(200).send(`la visio a bien été ajoutée`))
  }

// delete visio
 exports.deleteVisio = (req, res) => {
    visio
      .destroy({
        where: {
          userid : req.userid,
          visiouid : req.body.visioid
        }
      })
      .then(res.status(200).send("La visio a bien été supprimée"))
      .catch((err) => res.status(500).json({ 'error': `Impossible de supprimer l'annonce` }));
     }

// display all visio
      exports.getVisios = (req, res) => {
       visio
        .findAll({
          where: { userid : req.userid}
        })
        .then(item => {
          if (item) {
            res.json(item) } 
          else {
            res.status(400).json({'error' : 'Aucune visio programmée pour vous'})
            }
        })
      }
    

