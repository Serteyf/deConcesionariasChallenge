// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Vehicle extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   Vehicle.init({
//     name: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Vehicle',
//   });
//   return Vehicle;
// };

'use strict';
module.exports = (sequelize, dataTypes) => {
  const Vehicle = sequelize.define("Vehicle", {
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
      Vehicle.belongsToMany(models.Property, {
          as: "properties",
          through: "VehicleProperties",
          foreignKey: "vehicleId"
      })
  };
  return Vehicle;
};