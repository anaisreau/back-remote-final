'use strict';



module.exports = (sequelize, DataTypes) => {

    const FavoriteContenu = sequelize.define('favorite_contenu', {
        favoritecontenu_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        userid: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        contenuid: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        contenu_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contenu_description: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        contenu_lien: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
        {
            timestamps: false,
            underscored: true
        });



    return FavoriteContenu;
}