const { Router } = require("express");

const UserController = require("./controllers/UserController");

const routes = Router();

routes.get("/users", UserController.index);
routes.post("/users", UserController.store);

module.exports = routes;
