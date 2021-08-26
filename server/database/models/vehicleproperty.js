'use strict';
module.exports = (sequelize, dataTypes) => {
  const VehicleProperty = sequelize.define("vehicleProperty", {
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
  VehicleProperty.associate = (models) => {
    VehicleProperty.belongsTo(models.property, {foreignKey: 'propertyId'})
    VehicleProperty.belongsTo(models.vehicle, {foreignKey: 'vehicleId'})
  };
  
  return VehicleProperty;
};
