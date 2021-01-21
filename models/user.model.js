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
        type: DataTypes.STRING
      },
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
  
