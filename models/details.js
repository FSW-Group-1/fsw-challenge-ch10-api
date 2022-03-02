'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Details.init({
    userID: DataTypes.INTEGER,
    result: DataTypes.STRING,
    gameID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Details',
  });
  return Details;
};