const express = require('express');
const app = express();
const TypeContenuRouter = express.Router();
const bp = require("body-parser");
app.use(express.json());
app.use(bp.urlencoded({ extended: true }));
const { allType, idType, createType, deleteType, putType } = require('../controllers/type.controller');


// // Display all TypeContenus :
TypeContenuRouter.get('/', allType)

// Display TypeContenu information from its ID :
TypeContenuRouter.get('/:id', idType)

// create type
TypeContenuRouter.post('/register', createType)

// modify type
TypeContenuRouter.put('/modify/:id', putType)

//delete type
TypeContenuRouter.delete('/delete/:id', deleteType)


module.exports = TypeContenuRouter