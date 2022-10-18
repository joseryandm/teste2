const sequelize = require('../config/sequelize')
const Sequelize = require('sequelize')

const Corretor = require('./corretor')

const corretor = Corretor(sequelize, Sequelize.DataTypes)

const db = {
    corretor,
    sequelize
}

module.exports = db