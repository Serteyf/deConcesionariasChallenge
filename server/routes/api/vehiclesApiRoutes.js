const express = require("express");
const router = express.Router();

const vehiclesApiController = require("../../controllers/api/vehiclesApiController");

router.get("/index", vehiclesApiController.getAll);
router.get("/index/:id", vehiclesApiController.getOne);
router.post("/add", vehiclesApiController.add);
router.put("/edit/:id", vehiclesApiController.edit);
router.delete("/delete:id?", vehiclesApiController.delete);

module.exports = router;

