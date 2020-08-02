const express = require("express");
const router = express.Router();
const lineController = require("../controllers/line-controller");

router.post("/createUser", lineController.createUser);
router.post("/addToLine", lineController.addToLine);
router.post("/findPosition", lineController.findPosition);
router.post("/showLine", lineController.showLine);
router.post("/filterLine", lineController.filterLine);
router.post("/popLine", lineController.popLine);

module.exports = router;
