'use strict';

module.exports = (sequelize, dataTypes) => {
    const Category = sequelize.define("category", {
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

    Category.associate = ( {property} ) => {
        Category.hasMany(property, { as: "properties" });
    };

    return Category;
};