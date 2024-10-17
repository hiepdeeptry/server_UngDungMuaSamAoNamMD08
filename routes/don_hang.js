var express = require('express');
var router = express.Router();
var donHangCtrl = require('../controllers/don_hang.controller');

/* GET home page. */
router.get('/',donHangCtrl.list_don_hang);

module.exports = router;
