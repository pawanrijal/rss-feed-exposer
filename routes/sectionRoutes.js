const sectionRouter = require("express").Router();
const sectionController = require("../controllers/sectionController");

sectionRouter.post("/section", sectionController.create);
sectionRouter.get("/section", sectionController.findAll);

module.exports = { sectionRouter };
