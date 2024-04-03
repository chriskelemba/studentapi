const express = require("express");
const courseController = require("../controller/courseController");
const {verifyAccessToken} = require("../helpers/jwtHelper");
const router = express.Router();

router.get("/getAllCourse", courseController.getAllCourse);
router.get("/getCourse/:id", verifyAccessToken, courseController.getCourse);
router.post("/addCourse", courseController.addCourse);
router.patch("/updateCourse/:id", verifyAccessToken, courseController.updateCourse);

module.exports = router;