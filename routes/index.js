const router = require("express").Router();
const { rssRouter } = require("./rssRoutes");

router.use(rssRouter);

module.exports = { router };
