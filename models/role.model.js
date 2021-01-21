module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define("roles", {
      role_id : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true, 
        allowNull: false, 
        },
      name: {
        type: DataTypes.STRING
      }
    });
  
    return Role;
  };