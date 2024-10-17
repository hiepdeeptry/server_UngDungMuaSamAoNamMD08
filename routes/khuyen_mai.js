var express = require('express');
var router = express.Router();
var khuyenMaiCtrl = require('../controllers/khuyen_mai.controller');

/* GET home page. */
router.get('/',khuyenMaiCtrl.list_khuyen_mai);

module.exports = router;
