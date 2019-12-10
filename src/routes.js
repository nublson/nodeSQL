const { Router } = require("express");

const routes = Router();

routes.get("/", (req, res) => res.json({ hello: "World" }));

module.exports = routes;
