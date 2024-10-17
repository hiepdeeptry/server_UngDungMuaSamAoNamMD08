var express = require('express');
var router = express.Router();
var sanPhamCtrl = require('../controllers/san_pham.controller');
const { CloudinaryStorage } = require('multer-storage-cloudinary');

var multer = require('multer');

const storage = new CloudinaryStorage({
    cloudinary: require('../cloudinaryConfig'),
    params: {
      folder: 'uploads', // Thư mục trên Cloudinary
      allowed_formats: ['jpg', 'png', 'jpeg'], // Định dạng cho phép
    },
  });

var uploader = multer({ dest: './tmp' ,storage:storage});


/* GET home page. */
router.get('/',sanPhamCtrl.list_san_pham);
router.post('/add',uploader.single("anh"),sanPhamCtrl.add_san_pham);


module.exports = router;
