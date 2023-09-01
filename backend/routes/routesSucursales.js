const express = require("express");
const router = express.Router();
const sucursalesController = require("../controllers/SucursalesController.js");

router.get("/sucursales", sucursalesController.getAllSucursales);
router.get("/sucursales/:id", sucursalesController.getSucursalById);
router.post("/sucursales", sucursalesController.createSucursal);
router.put("/sucursales/:id", sucursalesController.updateSucursal);
router.delete("/sucursales/:id", sucursalesController.deleteSucursal);

module.exports = router;
