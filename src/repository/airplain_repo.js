let { Airplain } = require("../models/index");

class AirplainRep {
  async createplain(item) {
    try {
      let data = await Airplain.create(item);
      return data;
    } catch (err) {
      console.log("error something went wrong with airplain repo create");
      return err;
    }
  }

  async createBulkPlain(item) {
    console.log("item--", item);
    try {
      let data = await Airplain.bulkCreate(item);
      return data;
    } catch (err) {
      console.log("something went wrong with creating builk plain");
      throw err;
    }
  }

  async getplain(item) {
    try {
      let data = await Airplain.findByPk(item);
      return data;
    } catch (err) {
      console.log("error something went wrong with getplain repo");
      throw err;
    }
  }

  async getallPlain(filter) {
    try {
      if (filter.name) {
        let data = await Airplain.findAll({
          where: {
            name: filter.name,
          },
        });
        return data;
      }

      let data = await Airplain.findAll(filter);
      return data;
    } catch (err) {
      console.log("error something went wrong with getplain repo");
      throw err;
    }
  }

  async deleteplain({ id }) {
    try {
      let data = await Airplain.destroy({
        where: {
          id: id,
        },
      });
      return data;
    } catch (err) {
      console.log("error something went wrong with airplain repo create");
      return err;
    }
  }

  async updatePlain(item, data) {
    console.log(item, data, "updated--key");
    try {
      let updatedata = await Airplain.update(data, {
        where: {
          id: item,
        },
      });
      return updatedata;
    } catch (err) {
      console.log("error something went wrong with airplain repo create");
      return err;
    }
  }
}

module.exports = AirplainRep;
