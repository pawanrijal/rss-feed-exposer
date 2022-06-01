const PostService = require("../services/postServices");

class PostController {
  async create(req, res, next) {
    try {
      let data = await PostService.create(req.body);
      successResponse(res, 400, data, "Post Created");
    } catch (err) {
      next(err);
    }
  }

  async findAll(req, res, next) {
    //code here
  }
}

module.exports = new PostController();
