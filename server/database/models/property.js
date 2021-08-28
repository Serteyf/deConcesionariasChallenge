'use strict';
module.exports = (sequelize, dataTypes) => {
  const Property = sequelize.define("property", {
      id: {
          type: dataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
      categoryId: {
        type: dataTypes.INTEGER,
        foreignKey: true,
      },
      name: {
          type: dataTypes.STRING,
      }
    },
    {
        tableName: "Properties",
        timestamps: false,
        underscored: false
    });
    Property.associate = ( {category, vehicle} ) => {
        Property.belongsTo(category, {
            as: "category",
            foreignKey: "categoryId"
        });
        Property.belongsToMany(vehicle, {
            as: "vehicles",
            through: "VehicleProperties",
            foreignKey: "propertyId"
        })
    };
  return Property;
};