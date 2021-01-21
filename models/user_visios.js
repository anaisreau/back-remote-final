'use strict';
const models =require('../models')


module.exports = (sequelize, DataTypes) => {

    const user_visio = sequelize.define('user_visio', { 
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
    

    return user_visio;
}