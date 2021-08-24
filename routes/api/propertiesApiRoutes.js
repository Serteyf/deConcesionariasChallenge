const express = require("express");
const router = express.Router();

const propertiesApiController = require("../../controllers/api/propertiesApiController");

router.get("/", propertiesApiController.list);
router.post("/add", propertiesApiController.add);
router.put("/edit", propertiesApiController.edit);
router.delete("/delete", propertiesApiController.delete);

module.exports = router;
