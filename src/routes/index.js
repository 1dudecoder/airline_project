let express = require("express");
let router = express.Router();

let v1apiRouter = require("./v1/index");
let v2apiRouter = require("./v2/index");
let v3apiRouter = require("./v3/index");

router.use("/v1", v1apiRouter);
router.use("/v2", v2apiRouter);
router.use("/v3", v3apiRouter);

module.exports = router;
