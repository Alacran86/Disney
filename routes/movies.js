const express = require("express");
const Router = express.Router();
const { list } = require("./../controllers/movies/list");
const { byid } = require("./../controllers/movies/single");
const { findByFilter } = require("./../controllers/movies/find");
const { createMovie } = require("../controllers/movies/create");
const { update } = require("./../controllers/movies/update");
const { del } = require("./../controllers/movies/delete");

Router.get("/", list);
Router.get("/byid/:id", byid);
Router.get("/find", findByFilter);
Router.post("/create", createMovie);
Router.put("/update/:id", update);
Router.delete("/:id", del);

module.exports = Router;
