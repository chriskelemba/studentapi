const db = require("../model/dbConnect");

const student = db.student;

module.exports = {
    addStudent: async(req, res, next) => {
        try {
            let info = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                gender: req.body.gender,
            }

            const addStudent = await student.create(info)

            res.status(200).send(addStudent)
        } catch (error) {
            next(error)
        }
    },
}