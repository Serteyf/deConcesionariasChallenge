const express = require("express");
const router = express.Router();

const vehiclesApiController = require("../../controllers/api/vehiclesApiController");

router.get("/", vehiclesApiController.getAll);
router.post("/add", vehiclesApiController.add);
router.put("/edit", vehiclesApiController.edit);
router.delete("/delete", vehiclesApiController.delete);

module.exports = router;
