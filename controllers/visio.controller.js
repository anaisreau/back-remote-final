const db = require("../models");
const Visio = db.Visioconference;


// // Display all Visios :
exports.allVisio = ()=> {
    Visio
    .findAll({
      include: [{
        model : models.User, 
        attributes : ['email', 'phone', 'avatar']
      }]})
    .then(x => res.json(x))
}

// Display Visio information from its ID :
exports.idVisio = ()=> {
    Visio
    .findAll({
      where: { id : req.params.id },
      include: [{
        model : models.User, 
        attributes : [ 'email', 'phone', 'avatar', 'firstname', 'lastname']
      }]
    })
    .then(x => res.json(x))
}


// Create a new Visio :
exports.createVisio = (req, res)=> {
    Visio
    .create({
        description : req.body.description,
        name :req.body.name,
        lien :req.body.lien,
     })
    .then(x => res.json(x))
    }
// modify Visio from its id
exports.modifyVisio = (req, res)=> {

  const apiId = req.params.id;

  const {description,name,lien} = req.body;

 Visio.update({
   description : description,
   name :  name,
   lien :  lien,
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

// delete Visio from its id 
exports.deleteVisio = (req, res)=> {
    Visio
  .destroy({
    where : {
     id: req.params.id
    }
  }).then(function(){
    res.send('Visio supprimée avec succès')
  })
  }


  

