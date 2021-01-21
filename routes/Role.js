const express = require('express');
const app = express();
const Role = express.Router();
const bp = require("body-parser");
const { allRoles, idRole, createRole, putRole, deleteRole } = require('../controllers/typeUser.controller');

app.use(express.json());
app.use(bp.urlencoded({ extended: true }));

// // Display all TypesUsers :
Role.get('/', allRoles)

// Display TypesUser information from its ID :
Role.get('/:id', idRole)

// create Role
Role.post('/register', createRole)

// modify role
Role.put('/modify/:id', putRole )

//delete role 
Role.delete('/delete/:id', deleteRole ) 



module.exports = Role