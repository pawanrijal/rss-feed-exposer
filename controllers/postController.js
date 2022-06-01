const PostService = require("../services/postServices");
const successResponse = require("../utils/successResponse");

class PostController {
  async create(req, res, next) {
    try {
      let data = await PostService.create(req.body); //to service
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
