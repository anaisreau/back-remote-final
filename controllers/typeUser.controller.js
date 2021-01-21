const db = require('../models')
const Role = db.role;

// // Display all Roles :
exports.allRoles = (req, res)=> {
 Role.findAll()
 .then(function(roles){
   res.json(roles)
 })
}

// Display Role informations from its ID :
exports.idRole = (req, res)=> {
    Role
    .findAll({
      where: { id : req.params.id },
    })
    .then(x => res.json(x))
}

// create Role :
exports.createRole = (req, res)=> {
    Role
    .create({
        name : req.body.name
     })
    .then(x => res.json(x))
    }

// modify role 
exports.putRole = (req, res)=> {
    Role
.findByPk(req.params.id).then(function(Roles){
  if(Roles){
    return Roles.update(req.body)
  }
  else {
    res.send(404)
  }
}).then(function(){
  res.redirect('/')
})
}

// delete role 
exports.deleteRole = (req, res)=> {
    Role
  .destroy({
    where : {
      id : req.params.id
    }
  }).then(function(){
    res.send('Type de User supprimé avec succès')
  })
 }



