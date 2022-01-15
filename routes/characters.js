const express = require("express");
const Router = express.Router();
const { list } = require("./../controllers/list");
const { byid } = require("./../controllers/single");
const { createCharacter } = require("./../controllers/create");
const { update } = require("./../controllers/update");
const { del } = require("./../controllers/delete");

Router.get("/", list);
Router.get("/byid/:id", byid);
Router.post("/create", createCharacter);
Router.put("/update/:id", update);
Router.delete("/:id", del);

module.exports = Router;
