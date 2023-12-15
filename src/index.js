let express = require("express");
let bodyParser = require("body-parser");
let { port } = require("./config/serverConfig.js");
let router = require("./routes/index");
let { sequelize } = require("./models/index.js");

let mainsetUpFuntion = async () => {
  let app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", router);

  if (+process.env.SYNC) {
    sequelize.sync({ alter: true });
  }

  app.listen(port, (req, res) => {
    console.log("port connected successfull in", port);
  });
};

mainsetUpFuntion();
