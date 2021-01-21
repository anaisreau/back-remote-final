const db = require("../models");
const Contenu = db.Contenu;

// // Display all Contenus :
exports.allContenu = (req, res) => {
    Contenu
    .findAll()
    .then(x => res.json(x))
}

// Display Contenu information from its ID :
exports.idContenu = (req, res)=> {
    Contenu
    .findAll({
      where: { id : req.params.id },
     
    })
    .then(x => res.json(x))
}


// Create a new Contenu :
exports.createContenu = (req, res)=> {
    Contenu
    .create({
        description : req.body.description,
        name :req.body.name,
        lien :req.body.lien,
        photo : req.body.photo,
        matiere : req.body.matiere,
        niveau : req.body.niveau,
        type : req.body.type
     })
    .then(x => res.json(x))
    }
// modify contenu from its id
exports.modifyContenu = (req, res)=> {

  const apiId = req.params.id;

  const {description,name,lien,photo,matiere,niveau, type} = req.body;

 Contenu.update({
   description : description,
   name :  name,
   lien :  lien,
   photo : photo,
   matiere : matiere,
   niveau : niveau,
   type : type
},{
      where: {
          id : apiId
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

// delete contenu from its id 
exports.deleteContenu = (req, res)=> {
    Contenu
  .destroy({
    where : {
     id: req.params.id
    }
  }).then(function(){
    res.send('Contenu supprimé avec succès')
  })
  }


  
