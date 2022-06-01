const { section } = require("../lib/databaseConnection");
const {
  alreadyExistsException,
} = require("../exceptions/alreadyExistsException");
const slugify = require("slugify");
class SectionService {
  async create(payload) {
    //slugify options
    const options = {
      replacement: "-",
      remove: undefined,
      lower: true,
      strict: false,
      locale: "en",
      trim: true,
    };
    payload.id = slugify(payload.title, options); //creating slug

    payload.webUrl = payload.webUrl + payload.id; //updating url
    payload.apiUrl = payload.apiUrl + payload.id; //updating api

    let sectionData = await section.findAll({
      where: { id: payload.id },
    });

    //if not already exists
    if (sectionData.length === 0) {
      let data = await section.create(payload);
      return data;
    } else {
      throw new alreadyExistsException("Section");
    }
  }
  async findAll(payload) {
    let data = await section.findAll(payload);
    return data;
  }
}

module.exports = new SectionService();
