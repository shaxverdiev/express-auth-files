const {DataTypes} = require('sequelize')
const sequelize = require('../db/db-connect')

// модель пользователя в БД
const UserModel = sequelize.define('user', {  
    login: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
})

module.exports = UserModel