const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const models = require("./models");
const ContenuRouter = require("./routes/contenuRouter");
const MatiereRouter = require("./routes/matiereRouter");
const TypeContenuRouter = require("./routes/typeContenuRouter");
const RoleRouter = require("./routes/Role");
const NiveauRouter = require("./routes/niveauContenuRouter");
const VisioRouter = require("./routes/visioConferences.router");
const Auth = require("./routes/auth.routes");
const User = require("./routes/user.routes");
const Role = models.role;


var corsOptions = {
  origin: "https://dazzling-bohr-7dd504.netlify.app"
};

app.use(cors(corsOptions));




// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple rout
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Anais Reau Application" });
});

app.use('/api/auth', Auth)
app.use('/api/user', User)
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
// set port, listen for requests
const PORT = process.env.PORT || 8080;

  models
  .sequelize.sync({force : true }).then(() => {
    console.log('Drop and Resync Db');
    initial();
  });

  
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });