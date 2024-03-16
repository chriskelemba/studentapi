const db = require("../model/dbConnect");

const course = db.course;

module.exports = {
    // Add Course
    addCourse: async(req, res, next) => {
        try {
            let info = {
                courseName: req.body.courseName,
            }

            const addCourse = await course.create(info)

            res.status(200).send(addCourse)
        } catch (error) {
            next(error)
        }
    },
}