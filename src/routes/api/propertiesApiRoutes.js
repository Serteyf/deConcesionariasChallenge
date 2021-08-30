const express = require("express");
const router = express.Router();

const propertiesApiController = require("../../controllers/api/propertiesApiController");

router.get("/index", propertiesApiController.getAll);
router.get("/categories", propertiesApiController.getAllCategories)
router.get("/index/:id", propertiesApiController.getOne);
router.post("/add", propertiesApiController.add);
router.put("/edit/:id", propertiesApiController.edit);
router.delete("/delete/:id?", propertiesApiController.delete);

module.exports = router;
