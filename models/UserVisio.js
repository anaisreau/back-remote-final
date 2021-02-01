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
        visioid : {
            type: DataTypes.INTEGER,
        },

        userid : {
            type: DataTypes.INTEGER,
        },
     },
     {
        timestamps: false,
        underscored: true
     });
    

    return Uservisio;
}