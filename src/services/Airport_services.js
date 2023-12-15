let { AirportRepo } = require("../repository/index");

let airport_repo = new AirportRepo();

class AirportServices {
  async CreateAirport(data) {
    try {
      let airports = await airport_repo.CreateAirport(data);
      return airports;
    } catch (err) {
      console.log("something went wrong with CreateAirport", err);
      throw err;
    }
  }

  async CreatemanyAirports(data) {
    try {
      let airports = await airport_repo.CreatemanyAirports(data);
      return airports;
    } catch (err) {
      console.log("something went wrong with CreatemanyAirports", err);
      throw err;
    }
  }

  async getAirport(id) {
    try {
      let airport = await airport_repo.getAirport(id);
      return airport;
    } catch (err) {
      console.log("something went wrong with getAirport", err);
      throw err;
    }
  }

  async getAllAirports(filter) {
    try {
      let airport = await airport_repo.getAllAirports(filter);
      return airport;
    } catch (err) {
      console.log("something went wrong with getAllAirports", err);
      throw err;
    }
  }

  async deleteAirport(id) {
    try {
      let airport = await airport_repo.deleteAirport(id);
      return airport;
    } catch (err) {
      console.log("something went wrong with deleteAirport", err);
      throw err;
    }
  }

  async updateCityAirport(id, data) {
    try {
      let airport = await airport_repo.updateCityAirport(id, data);
      return airport;
    } catch (err) {
      console.log("something went wrong with updateCityAirport", err);
      throw err;
    }
  }
}

module.exports = AirportServices;
