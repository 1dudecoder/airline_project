let {
  create,
  update,
  distroy,
  get,
  getall,
  multiCreate,
  getallcityairports,
} = require("./city_controllers");

let {
  createAirport,
  createManyAirport,
  getAirport,
  getAllAirports,
  deleteAirport,
  updateCityAirport,
} = require("./Airport_controller");

let {
  createplain,
  createBulkPlain,
  deleteplain,
  getallPlain,
  getplain,
  updatePlain,
} = require("./Airplain_controller");

module.exports = {
  create,
  update,
  distroy,
  get,
  getall,
  multiCreate,
  getallcityairports,

  airportfun: {
    createAirport,
    createManyAirport,
    getAirport,
    getAllAirports,
    deleteAirport,
    updateCityAirport,
  },
  airplainfun: {
    createplain,
    createBulkPlain,
    deleteplain,
    getallPlain,
    getplain,
    updatePlain,
  },
};
