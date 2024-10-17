var express = require('express');
var router = express.Router();
var thongBaoCtrl = require('../controllers/thong_bao.controller');

/* GET home page. */
router.get('/',thongBaoCtrl.list_thong_bao);

module.exports = router;
