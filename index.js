const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const models = require("./models");
// const ContenuRouter = require("./routes/contenuRouter");
// const MatiereRouter = require("./routes/matiereRouter");
// const TypeContenuRouter = require("./routes/typeContenuRouter");
// const RoleRouter = require("./routes/Role");
// const NiveauRouter = require("./routes/niveauContenuRouter");
// const VisioRouter = require("./routes/visioConferences.router");
// const Role = db.role;


app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Anais Reau Application" });
});

// require('./routes/auth.routes')(app);
// require('./routes/user.routes')(app);

// app.use('/api/contenus', ContenuRouter)
// app.use('/api/matieres', MatiereRouter)
// app.use('/api/types', TypeContenuRouter)
// app.use('/api/roles', RoleRouter);
// app.use('/api/niveaux', NiveauRouter)
// app.use('/api/visios', VisioRouter)


// function initial() {
//   Role.create({
//     id: 1,
//     name: "user"
//   });
 
//   Role.create({
//     id: 2,
//     name: "moderator"
//   });

// }
// set port, listen for requests
const port = process.env.PORT || 8080;

  models
  .sequelize
  .sync({force : true})
  .then(() => app.listen(port, () => console.log(`App listening on port ${port}`)))

