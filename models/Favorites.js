'use strict';



module.exports = (sequelize, DataTypes) => {

    const Favorite = sequelize.define('Favorites', {
        favoritecontenu_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },

        contenu_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        contenu_description: {
            type: DataTypes.STRING,
            allowNull: true,

        },
        contenu_photo: {
            type: DataTypes.STRING,
            allowNull: true,

        },
        contenu_lien: {
            type: DataTypes.STRING,
            allowNull: true
        },
    },
        {
            timestamps: false,
            underscored: true
        });



    return Favorite;
}