let express = require("express");
const CityController = require("../../controllers/index");

let router = express.Router();

router.post("/city", CityController.create);
router.get("/city", CityController.get);
router.delete("/city", CityController.distroy);
router.patch("/city/:id", CityController.update);

module.exports = router;
