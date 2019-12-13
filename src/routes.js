const { Router } = require("express");

const UserController = require("./controllers/UserController");
const AddressController = require("./controllers/AddressController");

const routes = Router();

routes.get("/users", UserController.index);
routes.post("/users", UserController.store);

routes.get("/users/:user_id/addresses", AddressController.index);
routes.post("/users/:user_id/addresses", AddressController.store);

module.exports = routes;
