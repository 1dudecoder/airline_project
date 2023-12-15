let express = require("express");
let router = express.Router();
let { airportfun } = require("../../controllers/index");

router.patch("/airport/:id", airportfun.updateCityAirport);
router.post("/airport", airportfun.createAirport);
router.post("/airport/all", airportfun.createManyAirport);
router.get("/airport/all", airportfun.getAllAirports);
router.get("/airport/:id", airportfun.getAirport);
router.delete("/airport/:id", airportfun.deleteAirport);

module.exports = router;
