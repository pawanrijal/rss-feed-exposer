const rssResponse = require("../utils/rssResponse");

const { section, post } = require("../lib/databaseConnection");
const { rssGenerator } = require("../utils/rssGenerator");
const fs = require("fs");

class RssController {
  async getRss(req, res, next) {
    try {
      const sectionId = req.params.section;
      const sectionData = await section.findAll({ where: { id: sectionId } }); //query section

      //if not found return message
      if (
        sectionData === null ||
        sectionData === undefined ||
        sectionData.length === 0
      ) {
        return res.send({
          message: "Invalid section Id",
        });
      }

      const postData = await post.findAll({
        where: { sectionId },
      });
      const response = rssResponse(
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

      const xml = rssGenerator(response, postData);
      fs.writeFileSync("public/rss/rssField.xml", xml);
      res.type("application/xml");
      res.send(xml);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new RssController();
