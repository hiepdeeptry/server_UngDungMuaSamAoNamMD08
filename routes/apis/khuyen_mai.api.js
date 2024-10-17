var express = require('express');
var router = express.Router();
var khuyenMaiApiCtrl = require('../../controllers/apis/khuyen_mai.api.controller');

/* GET home page. */
router.get('/',khuyenMaiApiCtrl.listKhuyenMai);

module.exports = router;
