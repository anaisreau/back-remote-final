const db = require("../models");
const Contenu = db.Contenu;
const User = db.User

User.post('/addFavorite', (req,res) => {
      
  const useraddFavorite = req.body.userid 
  const contenuaddUser = req.body.contenuid 

  useraddFavorite.addContenu(contenuaddUser)

});
