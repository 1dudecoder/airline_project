let { AirportServices } = require("../services/index");

let aiport_services = new AirportServices();

const createAirport = async (req, res) => {
  try {
    let airport = await aiport_services.CreateAirport(req.body);
    return res.status(200).json({
      data: airport,
      success: "true",
      message: "data created succesfully",
      err: {},
    });
  } catch (err) {
    return res.status(500).json({
      data: {},
      success: "unable to create airport",
    });
  }
};

const createManyAirport = async (req, res) => {
  try {
    let airport = await aiport_services.CreatemanyAirports(req.body);
    return res.status(200).json({
      data: airport,
      success: "true",
      message: "create Many Airport succesfully",
      err: {},
    });
  } catch (err) {
    return res.status(500).json({
      data: {},
      success: "unable to createManyAirport airport",
    });
  }
};

const getAirport = async (req, res) => {
  try {
    let airport = await aiport_services.getAirport(req.params.id);
    return res.status(200).json({
      data: airport,
      success: "true",
      message: "data recived succesfully",
      err: {},
    });
  } catch (err) {
    return res.status(500).json({
      data: {},
      success: "unable to getAirport airport",
    });
  }
};

const getAllAirports = async (req, res) => {
  try {
    console.log("many-running---");
    let airport = await aiport_services.getAllAirports(req.body);
    return res.status(200).json({
      data: airport,
      success: "true",
      message: "get All Airports succesfully",
      err: {},
    });
  } catch (err) {
    return res.status(500).json({
      data: {},
      success: "unable to getAllAirports airport",
    });
  }
};

const deleteAirport = async (req, res) => {
  try {
    let airport = await aiport_services.deleteAirport(req.params.id);
    return res.status(200).json({
      data: airport,
      success: "true",
      message: "deleted Airport succesfully",
      err: {},
    });
  } catch (err) {
    return res.status(500).json({
      data: {},
      success: "something went wrong with deleteAirport",
    });
  }
};

const updateCityAirport = async (req, res) => {
  try {
    let airport = await aiport_services.updateCityAirport(
      req.params.id,
      req.body
    );
    return res.status(200).json({
      data: airport,
      success: "true",
      message: "update Airport succesfully",
      err: {},
    });
  } catch (err) {
    return res.status(500).json({
      data: {},
      success: "unable to updateCityAirport airport",
      err: err,
    });
  }
};

module.exports = {
  createAirport,
  createManyAirport,
  getAirport,
  getAllAirports,
  deleteAirport,
  updateCityAirport,
};
