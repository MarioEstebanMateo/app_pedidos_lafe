const express = require("express");
const router = express.Router();
const postresController = require("../controllers/PostresController.js");

router.get("/postres", postresController.getAllPostres);
router.get("/postres/:id", postresController.getPostreById);
router.post("/postres", postresController.createPostre);
router.put("/postres/:id", postresController.updatePostre);
router.delete("/postres/:id", postresController.deletePostre);

module.exports = router;
