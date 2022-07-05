const {DataTypes} = require('sequelize')
const sequelize = require('../db/db-connect')

// модель пользователя в БД
const UserModel = sequelize.define('token', {  
    user: {type = DataTypes.BOOLEAN, defaultValue: false},
    refreshToken: {type: DataTypes.STRING, allowNull: false }
})




module.exports = UserModel