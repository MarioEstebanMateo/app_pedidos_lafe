const express = require("express");
const router = express.Router();
const bandejasController = require("../controllers/BandejasController.js");

router.get("/bandejas", bandejasController.getAllBandejas);
router.get("/bandejas/:id", bandejasController.getBandejaById);
router.post("/bandejas", bandejasController.createBandeja);
router.put("/bandejas/:id", bandejasController.updateBandeja);
router.delete("/bandejas/:id", bandejasController.deleteBandeja);

module.exports = router;
