const dbConfig = require("../config/dbConfig");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorAliases: false,  // If errors in your code will overwrite
    });

sequelize
    .authenticate()
    .then(() => {
        console.log("Database Connection Successful...");
    })
    .catch((err) => {
        console.log("Error" + err);
    });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.student = require("./studentModel")(sequelize, DataTypes);

module.exports = db;