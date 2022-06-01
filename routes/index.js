const router = require("express").Router();
const { postRouter } = require("./postRoutes");
const { rssRouter } = require("./rssRoutes");
const { sectionRouter } = require("./sectionRoutes");

router.use(rssRouter);
router.use(sectionRouter);
router.use(postRouter);

module.exports = { router };
