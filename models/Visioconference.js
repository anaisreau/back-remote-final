'use strict';


module.exports = (sequelize, DataTypes) => {

    const Visioconference = sequelize.define('Visioconference', { 
        visio_id : {
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
            validate : {
                max : 255
            }
        },
        date : {
            type : DataTypes.DATE
        },
        photo : {
            type : DataTypes.BLOB("long")
        } 
    },
        {
            timestamps: false,
            underscored: true
         });

       

    
        

   return Visioconference;
}

    
