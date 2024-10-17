var express = require('express');
var router = express.Router();
var loaiHangCtrl = require('../controllers/loai_hang.controller');

/* GET home page. */
router.get('/',loaiHangCtrl.list_loai_hang);
router.post('/add',loaiHangCtrl.add_loai_hang);

module.exports = router;
