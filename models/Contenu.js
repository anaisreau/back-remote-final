'use strict';

module.exports = (sequelize, DataTypes) => {

    const Contenu = sequelize.define('Contenu', { 
   
        contenu_id : {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true, 
            allowNull: false, 
            },

        name : {
            type: DataTypes.STRING,
            validate : {
                max : 80
            },
        },
        description : {
            type: DataTypes.STRING,
            validate : {
                max : 255
            }
        },
        lien : {
            type: DataTypes.STRING,
        },
        photo : {
            type: DataTypes.STRING,
        },
        matiere : {
            type: DataTypes.STRING,
        },
        niveau : {
            type: DataTypes.STRING,
        },
        type : {
            type: DataTypes.STRING,
        },
    
    },
    {
        timestamps: false,
        underscored: true
     });


   return Contenu;
}

    
