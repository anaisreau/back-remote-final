const db = require("../models");
const Matiere = db.Matiere;

//display all matieres 
exports.allMatiere = (req, res) => {
        Matiere
        .findAll()
        .then(x => res.json(x))
}

//display matiere from its id 
exports.idMatiere = (req, res) => {
        Matiere
        .findAll({
            where: { matiere_id: req.params.id },
        })
        .then(x => res.json(x))
}

// register new matiere 
exports.registerMatiere = (req, res) => {
        Matiere 
        .create({
            name: req.body.name
        })
        .then(x => res.json(x))
}

// put matiere from its id 
exports.putMatiere = (req, res) => {
        Matiere
        .findByPk(req.params.id).then(function (Matiere) {
            if (Matiere) {
                return Matiere.update(req.body)
            }
            else {
                res.send(404)
            }
        }).then(function () {
            res.redirect('/')
        })
}

// delete matiere from its id 
exports.deleteMatiere =(req, res)=>{
    Matiere
    .destroy({
      where : {
        matiere_id : req.params.id
      }
    }).then(function(){
      res.send('Matière supprimée avec succès')
    })
}