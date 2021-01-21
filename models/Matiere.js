'use strict';

module.exports = (sequelize, DataTypes) => {

    const Matiere = sequelize.define('Matiere', { 
        
        matiere_id : {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true, 
            allowNull: false, 
            },
        name : {
            type: DataTypes.STRING,
            validate : {
                max : 80
            }
        }
    },
        {
            timestamps: false,
            underscored: true
         });
    
        
 
 

    return Matiere;
}