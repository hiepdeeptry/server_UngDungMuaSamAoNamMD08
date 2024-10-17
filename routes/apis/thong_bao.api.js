var express = require('express');
var router = express.Router();
var thongBaoApiCtrl = require('../../controllers/apis/thong_bao.api.controller');

/* GET home page. */
router.get('/',thongBaoApiCtrl.listThongBao);

module.exports = router;
