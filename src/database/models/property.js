'use strict';
module.exports = (sequelize, dataTypes) => {
  const Property = sequelize.define(
      "property", {
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
    Property.associate = ( {category, vehicle, vehicle_property} ) => {
        Property.belongsTo(category, {
            as: "category",
            foreignKey: {
                name: "categoryId",
                allowNull: true
            },
            
        });
        Property.belongsToMany(vehicle, {
            as: "vehicles",
            through: vehicle_property,
            foreignKey: {
                name: "propertyId",
                allowNull: true
            },
            onDelete: 'cascade',
            hooks: true
        })
    };
  return Property;
};