const rssRouter = require("express").Router();
const rssController = require("../controllers/rssController");

rssRouter.get("/:section", rssController.getRss);

module.exports = { rssRouter };
