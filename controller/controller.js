const UserService = require('../service/user_service');
const UserModel = require('../models/user_model');
const { validationResult } = require('express-validator');
const UserPayload = require('../payload/user-payload');
const bcrypt = require('bcrypt');
const TokenService = require('../service/token_service');

class Controller {
  async signin(req, res, next) {
    try {
      //валидируем логин
      const userLog = await UserModel.findOne({
        where: { login: req.body.login },
      });
      if (!userLog) {
        res.json('неверный логин');
      }
 
      // получаем захэшированный пароль для свеерки с тем что прислал пользователь
      let userPass = await UserModel.findOne({
        where: { login: req.body.login },
        attributes: ['password'],
        raw: true,
      });
      // сравниваем пароли
      const isPass = await bcrypt.compare(req.body.password, userPass.password);
      if (isPass) {
        return res.json('доступ разрешен');
      } else {
        return res.json('не верный пароль');
      }
    } catch (e) {
      console.log(e);
    }
  }

  async signup(req, res, next) {
    try {
      // валидация логина и пароля
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.json('validation error');
      }
      //есть ли пользователь с таким логином в БД
      const person = await UserModel.findOne({
        where: { login: req.body.login },
      });
      if (person) {
        res.json('This login is taken');
      } else {
        //функция которая возвращает токен и этот токен нужно передать в браузер
        const userData = await UserService.reg(
          req.body.login,
          req.body.password
        );

        // функция которая передает токен в браузер
        return res.json(userData);
      }
    } catch (e) {
      console.log(e);
    }
  }

  ////////////////////////////////////////////////////////////////////
  async testing(req, res) {
    const user = await UserModel.findOne({
      where: { login: req.body.login },
      raw: true,
    });

    if (user) {
      res.json('work');
    } else {
      res.json('dont work');
    }
  }
}

module.exports = new Controller();

// //  refresh token
// async sendNewToken(req, res, next) {
//   try {
//   } catch (e) {
//     console.log(e);
//   }
// }

// async fileUpload(req, res, next) {
//   try {
//     const file = req.files.file
//     const owner = await
//   } catch (e) {
//     console.log(e);
//     return res.json('upload error')
//   }
// }

// async latency(req, res, next) {
//   try {
//     res.json(['i', 'o']);
//   } catch (e) {
//     console.log(e);
//   }
// }

// async getFile(req, res, next) {
//   try {
//   } catch (e) {
//     console.log(e);
//   }
// }

// async getFileList(req, res, next) {
//   try {
//   } catch (e) {
//     console.log(e);
//   }
// }

// async deleteFile(req, res, next) {
//   try {
//   } catch (e) {
//     console.log(e);
//   }
// }

// async downloadFile(req, res, next) {
//   try {
//   } catch (e) {
//     console.log(e);
//   }
// }

// async updateFile(req, res, next) {
//   try {
//   } catch (e) {
//     console.log(e);
//   }
// }

// async getInfo(req, res, next) {
//   try {
//   } catch (e) {
//     console.log(e);
//   }
// }

// async logout(req, res, next) {
//   try {
//   } catch (e) {
//     console.log(e);
//   }
// }
