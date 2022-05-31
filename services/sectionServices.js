const section = require("../lib/databaseConnection");
const {
  alreadyExistsException,
} = require("../exceptions/alreadyExistsException");
class SectionService {
  async create(payload) {
    let sectionData = await section.findOne({
      where: { id: payload.id },
    });

    if (sectionData === null) {
      let data = await section.create(payload);
      return data;
    } else {
      throw new alreadyExistsException("Section");
    }
  }
  async findAll(payload) {
    //code here
  }
}

module.exports = new SectionService();
