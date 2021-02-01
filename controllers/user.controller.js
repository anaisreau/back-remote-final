const authJwt = require('../middlewares/authjwt')
const { role } = require('../models')
const db = require ('../models')
const user = db.user
const Favorites = db.Favorite
const UserVisio= db.Uservisio
const utils = require('../middlewares/authjwt')

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

 user.update({
   avatar : req.body.avatar,
   firstname : req.body.firstname,
   lastname :  req.body.lastname,
   email :  req.body.email,
   phone : req.body.phone,
   description : req.body.description,
},{
      where: {
          user_id : req.params.id
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
      Favorites
      .create({
        user_id : req.body.user_id,
        contenu_id: req.body.contenu_id,
        contenu_name : req.body.contenu_name,
        contenu_photo : req.body.contenu_photo,
        contenu_description: req.body.contenu_description,
        contenu_lien: req.body.contenu_lien
      })
      .catch(error => console.log(error))
      .then(res.status(200).send(`Le contenu a bien été ajouté aux favoris ! `))

};


// delete favorite contenu
     exports.deleteFavoris = (req, res) => {
     
      let user_id = utils.getUserId;
    
      Favorites
        .destroy({
          where: {
            user_id : user_id,
            contenu_id : req.params.contenu_id
          }
        })
        .then(res.status(200).send("Le contenu a bien été supprimé de vos favoris"))
        .catch((err) => res.status(500).json({ 'error': `Impossible de supprimer le contenu` }));
      }

// display all favoris 
          exports.getFavoris = (req, res) => {
            Favorites
            .findAll({
              where: { userid : req.body.user_id}
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
  UserVisio
  .create({
    userid: req.body.user_id,
    visioid: req.body.visioid,
  })
  .then(res.status(200).send(`la visio a bien été ajoutée`))
  }

// delete visio
 exports.deleteVisio = (req, res) => {
    UserVisio
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
       UserVisio
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
    

