const rssResponse = require("../utils/rssResponse");
const fs = require("fs");
const { section, post } = require("../lib/databaseConnection");

const xml2js = require("xml2js");

class RssController {
  async getRss(req, res, next) {
    try {
      const sectionId = req.params.section;
      const sectionData = await section.findAll({ where: { id: sectionId } });
      if (sectionData === null || sectionData === undefined) {
        res.json({
          message: "Invalid section Id",
        });
      }
      const postData = await post.findAll({
        where: { sectionId },
      });

      postData.posts.publishedDate = "dsandnasadd";

      console.log(postData);

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
      // const builder = new xml2js.Builder();
      // const xml = builder.buildObject(response);
      // res.type("application/xml");
      // res.send(xml);

      return res.json(response);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new RssController();
