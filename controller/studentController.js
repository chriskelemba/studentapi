const db = require("../model/dbConnect");

const student = db.student;

module.exports = {
    // Add Student
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

    // Get All Students
    getAllStudent: async(req, res, next) => {
        try {
            let students = await student.findAll({})
            res.status(200).send(students)
        } catch (error) {
            next(error)
        }
    },

    // Get Student by ID
    getStudent: async(req, res, next) => {
        try {
            let id = req.params.student_id
            let student = await student.findOne({where: {student_id: id}})

            if(!student) {
                throw(createError(404, "Student does not exist."))
            }
            res.status(200).send(student)
        } catch (error) {
            next(error)
        }
    },
}