var express = require('express');
var router = express.Router();
var sanPhamCtrl = require('../controllers/san_pham.controller');

/* GET home page. */
router.get('/',sanPhamCtrl.list_san_pham);

module.exports = router;
