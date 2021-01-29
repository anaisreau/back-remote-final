import bcrypt from 'bcryptjs'


module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("users", {
      user_id : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true, 
        allowNull: false, 
        },
      email: {
        type: DataTypes.STRING
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      }
    }, {
      instanceMethods: {
        generateHash: function (password) {
          return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
        },
        validPassword: function (password) {
          return bcrypt.compareSync(password, this.password)
        }},
      lastname: {
        type: DataTypes.STRING
      },
      firstname: {
        type: DataTypes.STRING
      },
      phone: {
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.STRING
      },
      avatar : {
        type : DataTypes.STRING
      }
    });
  
    return User;
  };
  
