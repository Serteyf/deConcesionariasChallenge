// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Property extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   Property.init({
//     name: DataTypes.STRING,
//     categoryId: DataTypes.INTEGER
//   }, {
//     sequelize,
//     modelName: 'Property',
//   });
//   return Property;
// };

'use strict';
module.exports = (sequelize, dataTypes) => {
  const Property = sequelize.define("Property", {
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
    Property.associate = (models) => {
        Property.belongsTo(models.Category, {
            as: "category",
            foreignKey: "categoryId"
        });
        Property.belongsToMany(models.Vehicle, {
            as: "vehicles",
            through: "VehicleProperties",
            foreignKey: "propertyId"
        })
    };
  return Property;
};