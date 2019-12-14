const { Router } = require("express");

const UserController = require("./controllers/UserController");
const AddressController = require("./controllers/AddressController");
const TechController = require("./controllers/TechController");
const ReportController = require("./controllers/ReportController");

const routes = Router();

// User routes
routes.get("/users", UserController.index);
routes.post("/users", UserController.store);

// Address routes
routes.get("/users/:user_id/addresses", AddressController.index);
routes.post("/users/:user_id/addresses", AddressController.store);

// Tech routes
routes.get("/users/:user_id/techs", TechController.index);
routes.post("/users/:user_id/techs", TechController.store);
routes.delete("/users/:user_id/techs", TechController.delete);

routes.get("/report", ReportController.show);

module.exports = routes;
