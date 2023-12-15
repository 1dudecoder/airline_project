"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Airplain, {
        foreignKey: "airplane_id",
        onDelete: "CASCADE",
        as: "airplain",
      });

      // ASSOCIATION FOR DEPARTURE CITY
      this.belongsTo(models.City, [
        {
          foreignKey: "Airport_id",
          onDelete: "CASCADE",
          as: "Airport",
        },
      ]);

      this.belongsTo(models.City, [
        {
          foreignKey: "departure_city_id",
          onDelete: "CASCADE",
          as: "DepartureCity",
        },
      ]);

      this.belongsTo(models.City, [
        {
          foreignKey: "destination_city_id",
          onDelete: "CASCADE",
          as: "DestinationCity",
        },
      ]);
    }
  }
  Flight.init(
    {
      departure_city_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Cities",
          key: "id",
          as: "departure_city_id",
        },
      },
      destination_city_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Cities",
          key: "id",
          as: "destination_city_id",
        },
      },
      airplane_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Airplains",
          key: "id",
          as: "airplane_id",
        },
      },
      departure: DataTypes.STRING,
      arrival: DataTypes.STRING,
      flight_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Airport_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Airports",
          key: "id",
          as: "Airport_id",
        },
      },
    },
    {
      sequelize,
      modelName: "Flight",
    }
  );
  return Flight;
};
