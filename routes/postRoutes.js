const postRouter = require("express").Router();
const postController = require("../controllers/rssController");

postRouter.get("/posts", postController.findAll);

module.exports = { postRouter };
