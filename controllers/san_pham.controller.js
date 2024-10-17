var multer = require("multer");
var fs = require("fs");
var myModel = require("../models/san_pham.model");
const cloudinary = require('../cloudinaryConfig');

// Get list sản phẩm
exports.list_san_pham = async (req, res, next) => {
  try {
    var listProducts = await myModel.sanPhamModel.find();
    return res.status(200).json(listProducts);

  } catch (error) {
    return res.status(error.status).json({
      msg: error.message,
    });
  }
};

// Thêm sản phẩm
// exports.add_san_pham = async (req, res, next) => {

//   if (req.method == "POST") {

//     let file = req.file;

//     let objSanPham = new myModel.sanPhamModel();
//     objSanPham.tenSanPham = req.body.tenSanPham;
//     objSanPham.kichCo = req.body.kichCo;
//     objSanPham.mauSac = req.body.mauSac;
//     objSanPham.moTa = req.body.moTa;
//     objSanPham.idLoaiHang = req.body.idLoaiHang;
//     objSanPham.soLuong = req.body.soLuong;
//     objSanPham.gia = req.body.gia;

//     try {
//       console.log(file);
//       fs.renameSync(file.path, "./public/images/" + file.originalname);
//       let url_file = '/images/' + file.originalname;
//       objSanPham.anh = url_file;
//     } catch (error) {
//       console.log(error.message);
//       return res.send("Lỗi")
//     }

//     try {

//       let newSanPham = await objSanPham.save();
//       return res.status(201).json({
//         msg: "Thêm sản phẩm thành công",newSanPham
//       });
//     } catch (error) {
//       return res.status(400).send(error.message);
//     }



//   }
// };






exports.add_san_pham = async (req, res, next) => {

  if (req.method == "POST") {

    let file = req.file;

    let objSanPham = new myModel.sanPhamModel();
    objSanPham.tenSanPham = req.body.tenSanPham;
    objSanPham.kichCo = req.body.kichCo;
    objSanPham.mauSac = req.body.mauSac;
    objSanPham.moTa = req.body.moTa;
    objSanPham.idLoaiHang = req.body.idLoaiHang;
    objSanPham.soLuong = req.body.soLuong;
    objSanPham.gia = req.body.gia;

    try {
      if (!file) {
        return res.status(400).json({ message: 'No file uploaded' });
      }

      // Upload hình ảnh lên Cloudinary
      const result = await cloudinary.uploader.upload(file.path);
      objSanPham.anh = result.secure_url;

      // Trả về URL của hình ảnh đã upload
    } catch (error) {
      res.status(500).json({ message: error.message });
    }

    try {

      let newSanPham = await objSanPham.save();
      return res.status(201).json({
        msg: "Thêm sản phẩm thành công", newSanPham
      });
    } catch (error) {
      return res.status(400).send(error.message);
    }



  }
};














// Sửa sản phẩm
exports.update_san_pham = async (req, res, next) => {
  let id_san_pham = req.param.idSanPham;

  if (req.method == "PUT") {
    try {
      res.status(200).json({ msg: "Sửa thành công!" });
    } catch (error) {
      return res.status(error.status).json({
        msg: error.message,
      });
    }
  }
};

// Xóa sản phẩm
exports.delete_san_pham = async (req, res, next) => {
  let id_san_pham = req.param.idSanPham;

  try {
    res.status(200).json({ msg: "Xóa thành công" });
  } catch (error) {
    return res.status(error.status).json({
      msg: error.message,
    });
  }
  res.status(200).json({ msg: "xóa" });
};


