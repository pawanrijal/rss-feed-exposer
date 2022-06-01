const Joi = require("joi");

const sectionSchema = Joi.object({
  title: Joi.string.required(),
});

module.exports = { sectionSchema };
