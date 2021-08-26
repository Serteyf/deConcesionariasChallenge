
'use strict';
module.exports = (sequelize, dataTypes) => {
  const Vehicle = sequelize.define("vehicle", {
      id: {
          type: dataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
      name: {
          type: dataTypes.STRING,
      },
  },
  {
      tableName: "Vehicles",
      timestamps: false,
      underscored: false
  });
  Vehicle.associate = (models) => {
      Vehicle.belongsToMany(models.property, {
          as: "properties",
          through: "VehicleProperties",
          foreignKey: "vehicleId"
      })
  };
  return Vehicle;
};