const express = require('express')
const controller = require('../controller/controller');
const {body} = require('express-validator')


const router = express.Router();

//перед попаданием на функцию signup, запрос проходит валидацию
router.post('/signup', body('login').isEmail(), 
body('password').isLength({min: 5, max: 20}),
controller.signup);

// router.post('/signin/new_token', controller.sendNewToken);
// router.post('/file/upload', controller.fileUpload); // auth
// router.get('/latency', controller.latency); //just add auth
// router.get('/file/:id', controller.getFile); // auth
// router.get('/file/list', controller.getFileList); // auth
// router.delete('/file/delete/:id', controller.deleteFile); // auth
// router.get('/file/download/:id', controller.downloadFile); // auth
// router.put('/file/update', controller.updateFile); // auth
// router.get('/info', controller.getInfo); // auth
// router.get('/logout', controller.logout); // auth

//////////////////////////////////////////////////////////////////////////
router.post('/testroute', controller.testing); // auth



module.exports = router;
