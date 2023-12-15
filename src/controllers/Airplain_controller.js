let { AirplainSer } = require("../services/index");

let airplain_ser = new AirplainSer();

const createplain = async (req, res) => {
  try {
    let data = await airplain_ser.createplain(req.body);
    return res.status(200).json({
      data: data,
      success: true,
      message: "plain created succesfully",
      err: {},
    });
  } catch (err) {
    console.log("something went wrong with createplain controller");
    return res.status(200).json({
      data: data,
      success: true,
      message: "plain created unsuccesfully",
      err: err,
    });
  }
};

const createBulkPlain = async (req, res) => {
  try {
    let data = await airplain_ser.createBulkPlain(req.body);
    return res.status(200).json({
      data: data,
      success: true,
      message: "multi plain created succesfully",
      err: {},
    });
  } catch (err) {
    console.log("something went wrong with createBulkPlain controller");
    return res.status(200).json({
      data: data,
      success: true,
      message: "multi plain created unsuccesfully",
      err: err,
    });
  }
};

const deleteplain = async (req, res) => {
  try {
    let data = await airplain_ser.deleteplain(req.params);
    return res.status(200).json({
      data: data,
      success: true,
      message: "plain delete succesfully",
      err: {},
    });
  } catch (err) {
    console.log("something went wrong with deleteplain controller");
    return res.status(200).json({
      data: data,
      success: true,
      message: "plain delete unsuccesfully",
      err: err,
    });
  }
};

const getallPlain = async (req, res) => {
  try {
    let data = await airplain_ser.getallPlain(req.query);
    return res.status(200).json({
      data: data,
      success: true,
      message: "all plain succesfully",
      err: {},
    });
  } catch (err) {
    console.log("something went wrong with getallPlain controller");
    return res.status(200).json({
      data: data,
      success: true,
      message: "all plain unsuccesfully",
      err: err,
    });
  }
};

const getplain = async (req, res) => {
  try {
    let data = await airplain_ser.getplain(req.params);
    return res.status(200).json({
      data: data,
      success: true,
      message: "plain get succesfully",
      err: {},
    });
  } catch (err) {
    console.log("something went wrong with get controller");
    return res.status(200).json({
      data: data,
      success: true,
      message: "plain created unsuccesfully",
      err: err,
    });
  }
};

const updatePlain = async (req, res) => {
  try {
    console.log("udpated-data", res);
    let data = await airplain_ser.updatePlain(req.params.id, req.body);
    return res.status(200).json({
      data: data,
      success: true,
      message: "plain update succesfully",
      err: {},
    });
  } catch (err) {
    console.log("something went wrong with update controller");
    return res.status(200).json({
      data: data,
      success: true,
      message: "plain update unsuccesfully",
      err: err,
    });
  }
};

module.exports = {
  createplain,
  createBulkPlain,
  deleteplain,
  getallPlain,
  getplain,
  updatePlain,
};
