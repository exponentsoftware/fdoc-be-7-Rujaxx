//db
const Sequelize = require('sequelize')

module.exports = new Sequelize('todo', 'postgres', 'admin', {
    host: 'localhost',
    dialect:  'postgres'
  });

