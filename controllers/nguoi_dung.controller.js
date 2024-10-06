var multer = require('multer');
var fs = require('fs');



// Get list người dùng
exports.list_nguoi_dung = async (req, res, next) => {
    try {
        return res.status(200).json(

        );
    } catch (error) {
        return res.status(error.status).json({
            msg: error.message
        });
    }
}


// Thêm người dùng
exports.add_nguoi_dung = async (req, res, next) => {


    if (req.method == 'POST') {

        try {

            return res.status(201).json({
                msg: "Thêm người dùng thành công"
            });
        } catch (error) {
            return res.status(error.status).json({
                msg: error.message
            });
        }

    }

}


// Sửa người dùng
exports.update_nguoi_dung = async (req, res, next) => {

    let id_nguoi_dung = req.param.idNguoiDung;

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

// Xóa người dùng
exports.delete_nguoi_dung = async (req, res, next) => {
    let id_nguoi_dung = req.param.idNguoiDung;

    try {

        res.status(200).json({ msg: 'Xóa thành công' });

    } catch (error) {
        return res.status(error.status).json({
            msg: error.message
        });
    }
    res.status(200).json({ msg: 'xóa' });

}



