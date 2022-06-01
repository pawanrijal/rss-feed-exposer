const postRouter = require("express").Router();
const PostController = require("../controllers/postController");

const validate = require("../middleware/validationMiddleware");
const postSchema = require("../validationSchemas/postValidationSchema");
postRouter.post("/post", validate(postSchema), PostController.create);

module.exports = { postRouter };
