const Sequelize = require('sequelize');
const sequelize = require("../util/database");

const Customer = sequelize.define("customer", {
    id: {
        type: Sequelize.INTEGER,
        autoIntcrement: true,
        allowNull: false,
        primaryKey: true,
    },
    
})