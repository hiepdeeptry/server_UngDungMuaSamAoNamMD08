var express = require('express');
var router = express.Router();
var sanPhamCtrl = require('../controllers/san_pham.controller');

var multer = require('multer');
var uploader = multer({ dest: './tmp' });

/* GET home page. */
router.get('/',sanPhamCtrl.list_san_pham);
router.post('/add',uploader.single("anh"),sanPhamCtrl.add_san_pham);


module.exports = router;
