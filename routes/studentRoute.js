const express = require("express");
const studentController = require("../controller/studentController");
const {verifyAccessToken} = require("../helpers/jwtHelper");
const router = express.Router();

router.get("/getAllStudent", verifyAccessToken, studentController.getAllStudent);
router.get("/getStudent/:id", verifyAccessToken, studentController.getStudent);
router.post("/addStudent", studentController.addStudent);
router.patch("/updateStudent/:id", verifyAccessToken, studentController.updateStudent);
router.delete("/deleteStudent/:id", verifyAccessToken, studentController.deleteStudent);

module.exports = router;