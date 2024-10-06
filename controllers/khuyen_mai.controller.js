var multer = require('multer');
var fs = require('fs');



// Get list khuyến mãi
exports.list_khuyen_mai = async (req, res, next) => {
    try {
        return res.status(200).json(

        );
    } catch (error) {
        return res.status(error.status).json({
            msg: error.message
        });
    }
}


// Thêm khuyến mãi
exports.add_khuyen_mai = async (req, res, next) => {


    if (req.method == 'POST') {

        try {

            return res.status(201).json({
                msg: "Thêm khuyến mãi thành công"
            });
        } catch (error) {
            return res.status(error.status).json({
                msg: error.message
            });
        }

    }

}


// Sửa khuyến mãi
exports.update_khuyen_mai = async (req, res, next) => {

    let id_khuyen_mai = req.param.idLoaiHang;

    if (req.method == 'PUT') {

        try {
            res.status(200).json({ msg: 'Sửa thành công!' });

        } catch (error) {
            return res.status(error.status).json({
                msg: error.message
            });
        }

    }

}

// Xóa khuyến mãi
exports.delete_khuyen_mai = async (req, res, next) => {
    let id_khuyen_mai = req.param.idKhuyenMai;

    try {

        res.status(200).json({ msg: 'Xóa thành công' });

    } catch (error) {
        return res.status(error.status).json({
            msg: error.message
        });
    }
    res.status(200).json({ msg: 'xóa' });

}



