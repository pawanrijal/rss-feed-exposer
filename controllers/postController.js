const PostService = require("../services/postServices");
const successResponse = require("../utils/successResponse");

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

  async rssGenerate(req, res, next) {
    try {
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new PostController();
