const express = require("express");
require("./database");

const routes = require("./routes");

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333, () => console.log("Port 3333 is open!"));
