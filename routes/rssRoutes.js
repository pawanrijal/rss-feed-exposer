const rssRouter = require("express").Router();
const rssController = require("../controllers/rssController");

rssRouter.get("/rss", rssController.getRss);

module.exports = { rssRouter };
