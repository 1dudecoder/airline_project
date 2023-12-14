"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // SETTING UP AIRPRT AND CITY RELATION
      this.belongsTo(models.City, {
        foreignKey: "cityID",
        onDelete: "CASCADE",
      });
    }
  }
  Airport.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
      },
      cityID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Cities",
          key: "id",
          as: "cityID",
        },
      },
    },
    {
      sequelize,
      modelName: "Airport",
    }
  );
  return Airport;
};
