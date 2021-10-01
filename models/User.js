const Sequelize = require('sequelize')
const db = require('../config/db')

const User = db.define('user',{
    username :{
        type : Sequelize.STRING,
        allowNull: false
    },
    email :{
        type : Sequelize.STRING,
        allowNull: false
    },
    phone :{
        type : Sequelize.STRING
    },
    password :{
        type : Sequelize.BOOLEAN,
        defaultValue: true
    },
})

module.exports = User;