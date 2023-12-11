const { CityRepo } = require("../repository/index");

class CityServices {
  constructor() {
    this.cityRepo = new CityRepo();
  }

  async createCity(data) {
    try {
      let city = await this.cityRepo.createCity(data);
      return city;
    } catch (err) {
      console.log("something went wrong at services createcity");
      throw { err };
    }
  }

  async deleteCity(data) {
    try {
      let response = await this.cityRepo.deleteCity(data);
      return response;
    } catch (err) {
      console.log("something went wrong at services deleteCity");
      throw { err };
    }
  }

  async getCity(cityID) {
    try {
      const city = await this.cityRepo.getCity(cityID);
      console.log(city, "mycity");
      return city;
    } catch (err) {
      console.log("something went wrong with getCity");
      throw { err };
    }
  }

  async UpdateCity(cityID, data) {
    try {
      let response = await this.cityRepo.updateCity(cityID, data);
      return response;
    } catch (err) {
      console.log("something went wrong at services UpdateCity", err.message);
      throw { err };
    }
  }
}

module.exports = CityServices;
