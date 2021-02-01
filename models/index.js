'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;




db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("./role.model.js")(sequelize, Sequelize);
db.Contenu = require ('../models/Contenu')(sequelize, Sequelize);
db.Visioconference = require('../models/Visioconference')(sequelize, Sequelize);
db.Type = require('../models/Type')(sequelize, Sequelize);
db.Matiere = require('../models/Matiere')(sequelize, Sequelize);
db.Niveau = require('../models/Niveau')(sequelize, Sequelize);
db.Favorite = require ('../models/Favorites')(sequelize, Sequelize);
db.Uservsio = require('../models/UserVisio')(sequelize, Sequelize);
// associations

db.role.hasMany(db.user)
db.user.belongsTo(db.role)

db.user.hasMany(db.Uservsio, {
  as: "Uservisio",
  foreignKey: "user_id",
});
db.Visioconference.hasMany(db.Uservsio, {
  as: "Uservisio",
  foreignKey: "visio_id",
});
db.user.hasMany(db.Favorite, {
  as: "Favorites",
  foreignKey: "user_id",
});
db.Contenu.hasMany(db.Favorite, {
  as: "Favorites",
  foreignKey: "contenu_id",
});
db.Niveau.hasMany(db.Visioconference)
db.Matiere.hasMany(db.Visioconference)
db.Visioconference.belongsTo(db.Matiere)
db.Visioconference.belongsTo(db.Niveau)

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;