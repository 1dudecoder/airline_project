"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Airplain extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // // ASSOCIATION TO FLIGHTS MODEL AS DEPARTURE CITY
      this.hasMany(models.Flight, {
        foreignKey: "airplane_id",
        as: "airplain",
      });
    }
  }
  Airplain.init(
    {
      modelname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      capacity: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 200,
      },
    },
    {
      sequelize,
      modelName: "Airplain",
    }
  );
  return Airplain;
};
