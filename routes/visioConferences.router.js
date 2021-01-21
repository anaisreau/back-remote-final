const express = require('express');
const app = express();
const VisioRouter = express.Router();
const bp = require("body-parser");
const {allVisio, idVisio, createVisio, modifyVisio, deleteVisio} = require ('../controllers/visio.controller')

app.use(express.json());
app.use(bp.urlencoded({ extended: true }));

// // Display all Visio :
VisioRouter.get('/all', allVisio)

// Display Visio information from its ID :
VisioRouter.get('/:id', idVisio)

// Create a new Visio :
VisioRouter.post('/register', createVisio)

//modify Visio from its id 
VisioRouter.put('/modify/:id', modifyVisio)

//delete Visio from its id 
VisioRouter.delete('/delete/:id', deleteVisio)


module.exports = VisioRouter