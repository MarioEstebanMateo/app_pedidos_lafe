const express = require("express");
const router = express.Router();
const softsController = require("../controllers/SoftsController.js");

router.get("/softs", softsController.getAllSofts);
router.get("/softs/:id", softsController.getSoftById);
router.post("/softs", softsController.createSoft);
router.put("/softs/:id", softsController.updateSoft);
router.delete("/softs/:id", softsController.deleteSoft);

module.exports = router;
