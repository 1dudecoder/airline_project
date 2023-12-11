const { City } = require("../models/index");

class CityRepo {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (err) {
      console.log("something went wrong with createCity");
      throw { err };
    }
  }

  async deleteCity({ cityID }) {
    try {
      const city = await City.destroy({
        where: {
          id: cityID,
        },
      });
      return true;
    } catch (err) {
      console.log("something went wrong with deleteCity");
      throw { err };
    }
  }

  async getCity({ cityID }) {
    try {
      const city = await City.findByPk(cityID);
      return city;
    } catch (err) {
      console.log("something went wrong with getCity");
      throw new { err }();
    }
  }

  async updateCity(cityID, data) {
    try {
      let city = await City.update(data, { where: { id: cityID } })
        .then((data) => {
          return true;
        })
        .catch((error) => {
          return error;
        });
    } catch (error) {
      throw err;
    }
  }
}

module.exports = CityRepo;
