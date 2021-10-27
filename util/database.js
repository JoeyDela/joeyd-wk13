const Sequelize = require('sequelize');

const sequelize = new Sequelize("sequelize", "root", "password", {
    dialect: "mysql",
    host: "localhost"
});

module.exports = sequelize;