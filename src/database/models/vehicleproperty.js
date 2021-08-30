'use strict';
module.exports = (sequelize, dataTypes) => {
  const VehicleProperty = sequelize.define(
      "vehicle_property", {
      id: {
          type: dataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
      vehicleId: {
          type: dataTypes.INTEGER,
          foreignKey: true,
      },
      propertyId: {
          type: dataTypes.INTEGER,
          foreignKey: true,
      },
      value: {
          type: dataTypes.INTEGER,
      }
      
  },
  {
      tableName: "VehicleProperties",
      timestamps: false,
      underscored: false
  });
  VehicleProperty.associate = ({ property, vehicle }) => {
    VehicleProperty.belongsTo(property, {
        foreignKey: {
            name: 'propertyId',
            allowNull: true
        },
        hooks: true,
        onDelete: 'cascade'
    })
    VehicleProperty.belongsTo(vehicle, {
        foreignKey: {
            name: 'vehicleId',
            allowNull: true
        },
        hooks: true,
        onDelete: 'cascade'
    })
  };
  
  return VehicleProperty;
};
