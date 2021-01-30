const db = require("../models");
const Type = db.Type;

// Display all TypeContenus :
exports.allType = (req, res) => {
    Type
    .findAll()
    .then(x => res.json(x))
}

// Display TypeContenu information from its ID :
exports.idType = (req, res) => {
    Type
    .findAll({
        where: { type_id : req.params.id },
      })
      .then(x => res.json(x))
}
    

// create type
exports.createType= (req, res) => {
    Type
    .create({
        name : req.body.name
     })
    .then(x => res.json(x))
}

// modify type 
exports.putType= (req, res) => {
    Type
    .findByPk(req.params.id).then(function(Types){
  if(Types){
    return Types.update(req.body)
  }
  else {
    res.send(404)
  }
}).then(function(req, res){
  res.redirect('/')
})}

// delete type 
exports.deleteType= (req, res) => {
    Type
  .destroy({
    where : {
      type_id : req.params.id
    }
  }).then(function(){
    res.send('Type de Contenu supprimé avec succès')
  })
}

  
