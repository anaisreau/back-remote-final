'use strict';
const models =require('.')


module.exports = (sequelize, DataTypes) => {

    const Uservisio = sequelize.define('Uservisio', { 
        user_visio_id : {
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
            } ,
            room : {
                type : DataTypes.STRING
            } 
     },
     {
        timestamps: false,
        underscored: true
     });
    

    return Uservisio;
}