var express = require('express');
var router = express.Router();
var loaiHangApiCtrl = require('../../controllers/apis/loai_hang.api.controller');

/* GET home page. */
router.get('/',loaiHangApiCtrl.listLoaiHang);

module.exports = router;
