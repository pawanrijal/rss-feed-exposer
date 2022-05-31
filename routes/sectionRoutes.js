const sectionRouter = require("express").Router();
const sectionController = require("../controllers/sectionController");

sectionRouter.get("/section", sectionController.findAll);

module.exports = { sectionRouter };
