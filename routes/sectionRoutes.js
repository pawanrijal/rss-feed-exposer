const sectionRouter = require("express").Router();
const sectionController = require("../controllers/sectionController");
const validate = require("../middleware/validationMiddleware");
const sectionSchema = require("../validationSchemas/sectionValidationSchema");

sectionRouter.post(
  "/section",
  validate(sectionSchema),
  sectionController.create
);
sectionRouter.get("/section", sectionController.findAll);

module.exports = { sectionRouter };
