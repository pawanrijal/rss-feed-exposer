const postRouter = require("express").Router();
const PostController = require("../controllers/postController");

postRouter.post("/post", PostController.create);

module.exports = { postRouter };
