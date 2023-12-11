let express = require("express");
let { port } = require("./config/serverConfig");
let Cityrepo = require("./repository/city_rep");
let app = express();

let mainsetUpFuntion = async () => {
  app.get("/", (req, res) => {
    console.log("welcome to the server");
    res.send("hellow bro");
  });

  app.listen(port, (req, res) => {
    let city = new Cityrepo();
    city.createCity({ name: "kotdwara" });
    // city.DeleteCity({ cityID: 1 });
    console.log("port connected successfull in", port);
  });
};

mainsetUpFuntion();
