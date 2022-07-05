const UserModel = require('../models/user_model');
const bcrypt = require('bcrypt');
const TokenService = require('./token_service');
const UserPayload = require('../payload/user-payload');

class UserService {
  async reg(login, password) {
      //функция хэширования пароля
      const hashPass = await bcrypt.hash(password, 4);
      // создание нового пользователя в БД
      const newUser = await UserModel.create({ login, password: hashPass });
      // генерация токенов
      const userPayload = new UserPayload(newUser); // this is payload for jwt(have 1 field - login)
      const tokens = TokenService.generateTokens({ ...userPayload });

      return {
        ...tokens,
        userPayload,
      };
  }

 
  
  // функция авторизации
  async entry(login, password) {
    
  }
}

module.exports = new UserService();
