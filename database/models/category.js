'use strict';
module.exports = (sequelize, dataTypes) => {
    const Category = sequelize.define("Category", {
        id: {
          type: dataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: { type: dataTypes.STRING },
        icon: { type: dataTypes.STRING }
    },
    {
        tableName: "Categories",
        timestamps: false,
        underscored: false
    });

    Category.associate = (models) => {
        Category.hasMany(models.Property, { as: "properties" });
    };

    return Category;
};