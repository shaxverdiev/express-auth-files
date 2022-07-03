const UserService = require('../service/user_service');
const { validationResult } = require('express-validator');

class Controller {
  async signin(req, res, next) {
    try {
      const { login, password } = req.body;
      const userData = await UserService.entry(login, password);
    } catch (e) {
      console.log(e);
    }
  }




  //  refresh token
  async sendNewToken(req, res, next) {
    try {
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

      // деструктурируем тело запроса
      const { login, password } = req.body;

      //функция которая возвращает токен и этот токен нужно передать в браузер
      const userData = await UserService.reg(login, password);

      // функция которая передает токен в браузер
      return res.json(userData);
    } catch (e) {
      console.log(e);
    }
  }






  async fileUpload(req, res, next) {
    try {
    } catch (e) {
      console.log(e);
    }
  }

  async latency(req, res, next) {
    try {
      res.json(['i', 'o']);
    } catch (e) {
      console.log(e);
    }
  }

  async getFile(req, res, next) {
    try {
    } catch (e) {
      console.log(e);
    }
  }

  async getFileList(req, res, next) {
    try {
    } catch (e) {
      console.log(e);
    }
  }

  async deleteFile(req, res, next) {
    try {
    } catch (e) {
      console.log(e);
    }
  }

  async downloadFile(req, res, next) {
    try {
    } catch (e) {
      console.log(e);
    }
  }

  async updateFile(req, res, next) {
    try {
    } catch (e) {
      console.log(e);
    }
  }

  async getInfo(req, res, next) {
    try {
    } catch (e) {
      console.log(e);
    }
  }

  async logout(req, res, next) {
    try {
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new Controller();
