const express = require("express");
const studentController = require("../controller/studentController");
const router = express.Router();

router.get("/getAllStudent", studentController.getAllStudent);
router.get("/getStudent", studentController.getStudent);
router.post("/addStudent", studentController.addStudent);

module.exports = router;