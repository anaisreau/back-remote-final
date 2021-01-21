const express = require('express');
const app = express();
const MatiereRouter = express.Router();
const bp = require("body-parser");
const { allMatiere, idMatiere, registerMatiere, putMatiere, deleteMatiere } = require('../controllers/matiere.controller');

app.use(express.json());
app.use(bp.urlencoded({ extended: true }));


// // Display all Matieres :
MatiereRouter.get('/', allMatiere)
 
// Display Matiere information from its ID :
MatiereRouter.get('/:id', idMatiere) 

// Create a new Matiere :
MatiereRouter.post('/register', registerMatiere);

// put matiere from its id 
MatiereRouter.put('/modify/:id', putMatiere)

// delete matiere from its id 
MatiereRouter.delete('/delete/:id', deleteMatiere)



module.exports = MatiereRouter