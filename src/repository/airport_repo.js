const { Op } = require("sequelize");
let { Airport } = require("../models/index");

class AirportRepo {
  async CreateAirport(data) {
    try {
      let airports = await Airport.create(data);
      return airports;
    } catch (err) {
      console.log("something went wrong with CreateAirport", err);
      throw err;
    }
  }

  async CreatemanyAirports(data) {
    try {
      let airports = await Airport.bulkCreate(data);
      return airports;
    } catch (err) {
      console.log("something went wrong with CreatemanyAirports", err);
      throw err;
    }
  }

  async getAirport(id) {
    try {
      let airport = await Airport.findByPk(id);
      return airport;
    } catch (err) {
      console.log("something went wrong with getAirport", err);
      throw err;
    }
  }

  async getAllAirports(filter) {
    try {
      if (filter.name) {
        let airports = await Airport.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        });
        return airports;
      }

      let airports = await Airport.findAll();
      return airports;
    } catch (err) {
      console.log("something went wrong with getAllAirports", err);
      throw err;
    }
  }

  async deleteAirport(id) {
    try {
      let airport = await Airport.destroy({
        where: {
          id: id,
        },
      });
      return airport;
    } catch (err) {
      console.log("something went wrong with deleteAirport", err);
      throw err;
    }
  }

  async updateCityAirport(id, data) {
    try {
      let airport = await Airport.update(data, { where: { id: id } });
      return airport;
    } catch (err) {
      console.log("something went wrong with updateCityAirport", err);
      throw err;
    }
  }
}

module.exports = AirportRepo;
