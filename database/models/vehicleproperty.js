// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class VehicleProperty extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   VehicleProperty.init({
//     value: DataTypes.INTEGER,
//     propertyId: DataTypes.INTEGER,
//     vehicleId: DataTypes.INTEGER
//   }, {
//     sequelize,
//     modelName: 'VehicleProperty',
//   });
//   return VehicleProperty;
// };


'use strict';
module.exports = (sequelize, dataTypes) => {
  const VehicleProperty = sequelize.define("VehicleProperty", {
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
    VehicleProperty.belongsTo(models.Property, {foreignKey: 'propertyId'})
    VehicleProperty.belongsTo(models.Vehicle, {foreignKey: 'vehicleId'})
  };
  
  return VehicleProperty;
};
