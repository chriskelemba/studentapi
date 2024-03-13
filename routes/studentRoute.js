const express = require("express");
const studentController = require("../controller/studentController");
const router = express.Router();

router.get("/addStudent", studentController.addStudent);
router.post("/addStudent", studentController.addStudent);
router.put("/addStudent", studentController.addStudent);
router.delete("/addStudent", studentController.addStudent);

module.exports = router;