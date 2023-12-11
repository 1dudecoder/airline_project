let express = require("express");
let { port } = require("./src/config/serverConfig");
let app = express();

let mainsetUpFuntion = async () => {
  app.get("/", (req, res) => {
    console.log("welcome to the server");
    res.send("hellow bro");
  });

  app.listen(port, (req, res) => {
    console.log("port connected successfull in", port);
  });
};

mainsetUpFuntion();
