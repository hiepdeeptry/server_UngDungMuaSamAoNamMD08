var multer = require('multer');
var fs = require('fs');



// Get list loại hàng
exports.list_loai_hang = async (req, res, next) => {
    try {
        return res.status(200).json(

        );
    } catch (error) {
        return res.status(error.status).json({
            msg: error.message
        });
    }
}


// Thêm loại hàng
exports.add_loai_hang = async (req, res, next) => {


    if (req.method == 'POST') {

        try {

            return res.status(201).json({
                msg: "Thêm loại hàng thành công"
            });
        } catch (error) {
            return res.status(error.status).json({
                msg: error.message
            });
        }

    }

}


// Sửa loại hàng
exports.update_loai_hang = async (req, res, next) => {

    let id_loai_hang = req.param.idLoaiHang;

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

// Xóa loại hàng
exports.delete_loai_hang = async (req, res, next) => {
    let id_loai_hang = req.param.idLoaiHang;

    try {

        res.status(200).json({ msg: 'Xóa thành công' });

    } catch (error) {
        return res.status(error.status).json({
            msg: error.message
        });
    }
    res.status(200).json({ msg: 'xóa' });

}



