const express = require('express');
const app = express();
const NiveauRouter = express.Router();
const bp = require("body-parser");
const { allNiveau, idNiveau, createNiveau, putNiveau, deleteNiveau } = require('../controllers/niveau.controller');

app.use(express.json());
app.use(bp.urlencoded({ extended: true }));


// // Display all Niveaus :
NiveauRouter.get('/', allNiveau)

// Display Niveau information from its ID :
NiveauRouter.get('/:id', idNiveau)

// Create a new Niveau :
NiveauRouter.post('/register', createNiveau)

// modify niveau from its id 
NiveauRouter.put('/modify/:id',putNiveau)

//delete niveau from its id 
NiveauRouter.delete('/delete/:id', deleteNiveau)


module.exports = NiveauRouter