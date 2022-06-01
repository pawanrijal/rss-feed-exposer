const SectionService = require("../services/sectionServices");
const successResponse = require("../utils/successResponse");
class SectionController {
  async create(req, res, next) {
    try {
      let data = await SectionService.create(req.body);
      successResponse(res, 400, data, "Section Created");
    } catch (err) {
      next(err);
    }
  }

  async findAll(req, res, next) {
    //code here
    try {
      let data = await SectionService.findAll(req.body);
      successResponse(res, 400, data, "Section Fetched");
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new SectionController();
