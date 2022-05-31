const router = require("express").Router();
const { rssRouter } = require("./rssRoutes");
const { sectionRouter } = require("./sectionRoutes");

router.use(rssRouter);
router.use(sectionRouter);

module.exports = { router };
