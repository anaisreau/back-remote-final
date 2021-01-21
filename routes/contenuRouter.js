const express = require('express');
const app = express();
const bp = require("body-parser");
const { allContenu, idContenu, createContenu, modifyContenu, deleteContenu } = require('../controllers/contenu.controller');
const Contenus = express.Router()

app.use(express.json());
app.use(bp.urlencoded({ extended: true }));


// Display all Contenus :
Contenus.get('/', allContenu)

// Display Contenu information from its ID :
Contenus.get('/:id', idContenu)

// Create a new Contenu :
Contenus.post('/register', createContenu)

//modify contenu from its id 
Contenus.put('/modify/:id', modifyContenu)

//delete contenu from its id 
Contenus.delete('/delete/:id', deleteContenu)

module.exports = Contenus
