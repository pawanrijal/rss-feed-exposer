const Joi = require("joi");

const postSchema = Joi.object({
  postType: Joi.string().required(),
  title: Joi.string().required(),
  sectionId: Joi.string().required(),
  isHosted: Joi.boolean().required(),
  pillarName: Joi.string().required(),
});

module.exports = { postSchema };
