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

    const webUrl = "https://www.pawan.com/";
    const apiUrl = "https://www.pawan.com/api/";

    payload.webUrl = webUrl + payload.id; //updating url

    payload.apiUrl = apiUrl + payload.id; //updating api

    //check section id
    let sectionData = await section.findOne({
      where: { id: payload.id },
    });

    if (sectionData === null) {
      //if not already exists
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
