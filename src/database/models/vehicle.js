
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
  Vehicle.associate = ({property, vehicle_property}) => {
      Vehicle.belongsToMany(property, {
          as: "properties",
          through: vehicle_property,
          foreignKey: {
              name: "vehicleId", 
              allowNull: true
          },
          onDelete: 'CASCADE',
          hooks: true
      })
  };
  return Vehicle;
};