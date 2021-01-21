const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const db = require("./models");
const ContenuRouter = require("./routes/contenuRouter");
const MatiereRouter = require("./routes/matiereRouter");
const TypeContenuRouter = require("./routes/typeContenuRouter");
const RoleRouter = require("./routes/Role");
const NiveauRouter = require("./routes/niveauContenuRouter");
const VisioRouter = require("./routes/visioConferences.router");

const Role = db.role;


app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Anais Reau Application" });
});

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

app.use('/api/contenus', ContenuRouter)
app.use('/api/matieres', MatiereRouter)
app.use('/api/types', TypeContenuRouter)
app.use('/api/roles', RoleRouter);
app.use('/api/niveaux', NiveauRouter)
app.use('/api/visios', VisioRouter)


function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });

}

db.sequelize.sync({force : true}).then(() => {
  console.log('Drop and Resync Db');
  initial();
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});










// const express = require ('express')
// const app = express();
// const db = require("./models");
// const Role = db.Role;
// const cors = require('cors');
// const bodyParser =require('body-parser');

// const contenuRouter = require('./routes/contenuRouter');
// const TypesUserRouter = require('./routes/typeUserRouter')
// const TypesContenuRouter = require ('./routes/typeContenuRouter')
// const NiveauContenuRouter = require ('./routes/niveauContenuRouter')
// const MatiereRouter = require ('./routes/matiereRouter')
// const AuthRouter = require ('./routes/auth.routes')
// const UserRouter = require('./routes/user.routes')

// const fileUpload = require('express-fileupload')
// app.use(express.urlencoded({extended : true}))
// app.use(express.json())
// var corsOptions = {
//   origin: "http://localhost:8080"
// };
// app.use(cors(corsOptions));
// app.use(cors())
// app.use(bodyParser.json())
// app.use(express.json());
// app.use(express.urlencoded({
//   extended: true
// }));

// app.get('/', (req, res) => {
//   res.send('home')
// })

// // Utilisation des différents routers selon les routes définies ci-dessous :
// // routes
// require('./app/routes/auth.routes')(app);
// require('./app/routes/user.routes')(app);
// app.use('/api/contenus', contenuRouter)
// app.use('/api/typesusers', TypesUserRouter)
// app.use('/api/typescontenus', TypesContenuRouter)
// app.use('/api/matieres', MatiereRouter)
// app.use('/api/niveauxcontenus', NiveauContenuRouter)

// function initial() {
//   Role.create({
//     role_id: 1,
//     role_name: "user"
//   });
 
//   Role.create({
//     role_id: 2,
//     role_name: "moderator"
//   });
 
//   Role.create({
//     role_id: 3,
//     role_name: "admin"
//   });
// }
// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}.`);
// });

// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Db');
//   initial();
// });