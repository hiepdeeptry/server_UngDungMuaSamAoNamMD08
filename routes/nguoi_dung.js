var express = require('express');
var router = express.Router();
var nguoiDungCtrl = require('../controllers/nguoi_dung.controller');

/* GET home page. */
router.get('/',nguoiDungCtrl.list_nguoi_dung);

module.exports = router;
