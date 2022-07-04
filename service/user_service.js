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
  async entry(req, res, login, password) {
    //находим пароль из БД по паролю из тела запроса
    const passfromDB = await UserModel.findOne({
      where: { password: req.body.password },
    });
    // аналогично находим логин
    const user = await UserModel.findOne({ where: { login: login } });
    if (!user) {
      res.json('Login не найден');
    }
    //тут нужно сравнить пароль пришедший от пользователя с тем что в БД, что бы он прошел или не прошел авторизацию
    // const isPass = await bcrypt.compare(password, user.password)
  }
}

module.exports = new UserService();
