const express = require("express");
const Router = express.Router();
const { list } = require("./../controllers/characters/list");
const { byid } = require("./../controllers/characters/single");
const { findByFilter } = require("./../controllers/characters/find");
const { createCharacter } = require("../controllers/characters/create");
const { update } = require("./../controllers/characters/update");
const { del } = require("./../controllers/characters/delete");

Router.get("/", list);
Router.get("/byid/:id", byid);
Router.get("/find", findByFilter);
Router.post("/create", createCharacter);
Router.put("/update/:id", update);
Router.delete("/:id", del);

module.exports = Router;
