const Sequelize = require('sequelize')
const db = require('../config/db')

const Task = db.define('task',{
    title :{
        type : Sequelize.STRING,
        allowNull: false
    },
    description :{
        type : Sequelize.STRING,
        allowNull: false
    },
    category :{
        type : Sequelize.STRING
    },
    done :{
        type : Sequelize.BOOLEAN,
        defaultValue: true
    },
})

module.exports = Task;