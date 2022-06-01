const postRouter = require("express").Router();
const PostController = require("../controllers/postController");

postRouter.post("/post", PostController.create);

postRouter.get("post/:section", PostController.rssGenerate);

module.exports = { postRouter };
