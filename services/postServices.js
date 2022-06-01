const slugify = require("slugify");
const { post, section } = require("../lib/databaseConnection");
const {
  alreadyExistsException,
} = require("../exceptions/alreadyExistsException");

const { notFoundException } = require("../exceptions/notFoundException");

class PostService {
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

    payload.publishedDate = Date.now();

    payload.apiUrl = apiUrl + payload.id; //updating api

    payload.pillarId = "pillar/" + payload.pillarName;

    //check section id
    let sectionData = await section.findOne({
      where: { id: payload.sectionId },
    });

    if (
      sectionData === null ||
      sectionData === undefined ||
      sectionData.length === 0
    ) {
      throw new notFoundException("Section");
    }

    let postData = await post.findOne({
      where: { id: payload.id },
    });

    if (postData === null) {
      //if not already exists
      let data = await post.create(payload);
      return data;
    } else {
      throw new alreadyExistsException("Post");
    }
  }

  async findAll(payload) {
    //code here
  }
}

module.exports = new PostService();
