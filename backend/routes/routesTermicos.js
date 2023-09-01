const express = require("express");
const router = express.Router();
const termicosController = require("../controllers/TermicosController.js");

router.get("/termicos", termicosController.getAllTermicos);
router.get("/termicos/:id", termicosController.getTermicoById);
router.post("/termicos", termicosController.createTermico);
router.put("/termicos/:id", termicosController.updateTermico);
router.delete("/termicos/:id", termicosController.deleteTermico);

module.exports = router;
