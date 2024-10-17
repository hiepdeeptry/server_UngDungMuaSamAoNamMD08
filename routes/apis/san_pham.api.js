var express = require('express');
var router = express.Router();
var sanPhamApiCtrl = require('../../controllers/apis/san_pham.api.controller');

/* GET home page. */
router.get('/',sanPhamApiCtrl.listSanPham);

module.exports = router;
