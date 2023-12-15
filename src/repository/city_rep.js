const { Op, where } = require("sequelize");
const { City, Airport } = require("../models/index");

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

  async getall(filter) {
    try {
      if (filter.name) {
        let city = await City.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        });
        return city;
      }
      const city = await City.findAll();
      return city;
    } catch (err) {
      console.log("something went wrong with getall");
      throw new { err }();
    }
  }

  async createMulti(data) {
    try {
      let cities = await City.bulkCreate(data);
      return cities;
    } catch (err) {
      console.log("some error found while inserting bulk data");
      throw err;
    }
  }

  async getallcityairports(filter) {
    try {
      console.log(filter, "my-filter");

      if (filter) {
        console.log("hyy");
        const city = await City.findAll({
          include: Airport,
          where: {
            id: filter,
          },
        });
        return city;
      }
      
      const city = await City.findAll({ include: Airport });
      return city;
    } catch (err) {
      console.log("something went wrong with getall");
      throw new { err }();
    }
  }
}

module.exports = CityRepo;
