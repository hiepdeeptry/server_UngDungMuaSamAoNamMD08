var express = require('express');
var router = express.Router();
var donHangApiCtrl = require('../../controllers/apis/don_hang.api.controller');

/* GET home page. */
router.get('/',donHangApiCtrl.listDonhang);

module.exports = router;
