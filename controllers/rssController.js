const rssResponse = require("../utils/rssResponse");
const fs = require("fs");
const { section, post } = require("../lib/databaseConnection");

class RssController {
  async getRss(req, res, next) {
    const sectionId = req.params.section;
    const sectionData = await section.findAll({ where: { id: sectionId } });
    if (sectionData === null || sectionData === undefined) {
      res.json({
        message: "Invalid section Id",
      });
    }
    const postData = await post.findAll({
      where: { sectionId },
      attribrutes: { exclude: ["updatedAt"] },
    });

    rssResponse(
      res,
      "developer",
      200,
      1,
      20,
      1,
      100,
      sectionData,
      "ok",
      postData
    );
  }
}

module.exports = new RssController();
