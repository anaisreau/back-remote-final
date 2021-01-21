'use strict';

const models =require('../models')


module.exports = (sequelize, DataTypes) => {

    const Niveau = sequelize.define('Niveau', { 
        
        niveau_id : {
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
        },
    }, 
    {
        timestamps: false,
        underscored: true
     });


   

        

  


    return Niveau;
}