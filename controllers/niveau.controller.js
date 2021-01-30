const db = require("../models");
const Niveau = db.Niveau;

// Display all Niveaux :
exports.allNiveau = (req, res) => {
    Niveau
        .findAll()
        .then(x => res.json(x))
}

// Display Niveau from its ID :
exports.idNiveau = (req, res) => {
    Niveau
        .findAll({
            where: { niveau_id: req.params.id },
        })
        .then(x => res.json(x))
}

// Create a new Niveau :
exports.createNiveau = (req, res) => {
    Niveau
        .create({
            name: req.body.name
        })
        .then(x => res.json(x))
}

exports.putNiveau = (req, res) => {
    Niveau
        .findByPk(req.params.id).then(function (Niveaux) {
            if (Niveaux) {
                return Niveaux.update(req.body)
            }
            else {
                res.send(404)
            }
        }).then(function () {
            res.redirect('/')
        })}
  
  // delete niveau from its id 
    exports.deleteNiveau = (req, res) => {
            Niveau
                .destroy({
                    where: {
                        niveau_id: req.params.id
                    }
                }).then(function () {
                    res.send('Niveau supprimé avec succès')
                })
    }
  
  
  