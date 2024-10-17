var express = require('express');
var router = express.Router();
var nguoiDungApiCtrl = require('../../controllers/apis/nguoi_dung.api.controller');

/* GET home page. */
router.get('/',nguoiDungApiCtrl.listNguoiDung);

module.exports = router;
