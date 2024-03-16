const express = require("express");
const courseController = require("../controller/courseController");
const router = express.Router();

router.get("/addCourse", courseController.addCourse);
router.post("/addCourse", courseController.addCourse);
router.put("/addCourse", courseController.addCourse);
router.delete("/addCourse", courseController.addCourse);

module.exports = router;