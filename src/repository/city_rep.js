const { City } = require("../models/index");

 class CityRepo {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (err) {
      throw { err };
    }
  }

  async DeleteCity({ cityID }) {
    try {
      const city = await City.destroy({
        where: {
          id: cityID,
        },
      });
      return city;
    } catch (err) {
      throw { err };
    }
  }
}


module.exports = CityRepo;