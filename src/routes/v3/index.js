let { airplainfun } = require("../../controllers/index");
let express = require("express");
let router = express.Router();

router.post("/airplain", airplainfun.createplain);
router.post("/airplain/all", airplainfun.createBulkPlain);

router.get("/airplain", airplainfun.getallPlain);
router.get("/airplain/:id", airplainfun.getplain);

router.delete("/airplain/:id", airplainfun.deleteplain);
router.patch("/airplain/:id", airplainfun.updatePlain);

module.exports = router;
