let { AirplainRep } = require("../repository/index");
let airplain_repo = new AirplainRep();

class AirplainSer {
  constructor() {
    // this.airplain_repo = new AirplainRep();
  }

  async createplain(item) {
    try {
      let data = await airplain_repo.createplain(item);
      return data;
    } catch (err) {
      console.log(
        "error something went wrong with airplain AirplainSer create"
      );
      return err;
    }
  }

  async createBulkPlain(item) {
    try {
      let data = await airplain_repo.createBulkPlain(item);
      return data;
    } catch (err) {
      console.log("something went wrong with creating builk plain AirplainSer");
      throw err;
    }
  }

  async getplain(item) {
    try {
      let data = await airplain_repo.getplain(item);
      return data;
    } catch (err) {
      console.log("error something went wrong with getplain repo AirplainSer");
      throw err;
    }
  }

  async getallPlain(filter) {
    try {
      let data = await airplain_repo.getallPlain(filter);
      return data;
    } catch (err) {
      console.log("error something went wrong with getplain repo AirplainSer");
      throw err;
    }
  }

  async deleteplain(item) {
    try {
      let data = await airplain_repo.deleteplain(item);
      return data;
    } catch (err) {
      console.log(
        "error something went wrong with airplain repo create AirplainSer"
      );
      return err;
    }
  }

  async updatePlain(item, data) {
    console.log("first-updated--key", item, data);
    try {
      let updatedata = await airplain_repo.updatePlain(item, data);
      return updatedata;
    } catch (err) {
      console.log(
        "error something went wrong with airplain repo create AirplainSer"
      );
      return err;
    }
  }
}

module.exports = AirplainSer;
