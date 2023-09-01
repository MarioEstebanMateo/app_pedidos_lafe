const express = require("express");
const router = express.Router();
const heladosController = require("../controllers/HeladosController.js");

router.get("/helados", heladosController.getAllHelados);
router.get("/helados/:id", heladosController.getHeladoById);
router.post("/helados", heladosController.createHelado);
router.put("/helados/:id", heladosController.updateHelado);
router.delete("/helados/:id", heladosController.deleteHelado);

module.exports = router;
