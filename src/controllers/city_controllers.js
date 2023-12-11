let { CityServices } = require("../services/index");

let city_services = new CityServices();

//created city
const create = async (req, res) => {
  try {
    let city = await city_services.createCity(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "succesfully created a city",
      err: {},
    });
  } catch (err) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to created a city",
      err: err,
    });
  }
};

//distroy city
const distroy = async (req, res) => {
  try {
    let response = await city_services.deleteCity(req.body);
    return res.status(201).json({
      data: response,
      success: true,
      message: "succesfully deleted a city",
      err: {},
    });
  } catch (err) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to delete a city",
      err: err,
    });
  }
};

//get city
const get = async (req, res) => {
  try {
    let city = await city_services.getCity(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "succesfully get a city",
      err: {},
    });
  } catch (err) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to get a city",
      err: err,
    });
  }
};

//updated city
const update = async (req, res) => {
  try {
    let city = await city_services.UpdateCity(req.params.id, req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "succesfully updated a city",
      err: {},
    });
  } catch (err) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to updated a city",
      err: err,
    });
  }
};

module.exports = {
  create,
  update,
  distroy,
  get,
};
