"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // SETTING UP CITY AND AIRPORT RELATION
      this.hasMany(models.Airport, {
        foreignKey: "cityID",
      });
      // // ASSOCIATION TO FLIGHTS MODEL AS DEPARTURE CITY
      this.hasMany(models.Flight, {
        foreignKey: "departure_city_id",
        as: "DepartureFlights",
      });
      // // ASSOCIATION TO FLIGHTS MODEL AS DESTINATION CITY
      this.hasMany(models.Flight, {
        foreignKey: "destination_city_id",
        as: "DestinationFlights",
      });
      // ASSOCIATION TO FLIGHTS MODEL AS AIRPORT
      this.hasMany(models.Flight, {
        foreignKey: "Airport_id",
        as: "AirportFlights",
      });
    }
  }
  City.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "City",
    }
  );
  return City;
};
