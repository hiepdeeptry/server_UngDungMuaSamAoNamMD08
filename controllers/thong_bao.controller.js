var multer = require('multer');
var fs = require('fs');



// Get list thông báo
exports.list_thong_bao = async (req, res, next) => {
    try {
        return res.status(200).json(

        );
    } catch (error) {
        return res.status(error.status).json({
            msg: error.message
        });
    }
}


// Thêm thông báo
exports.add_thong_bao = async (req, res, next) => {


    if (req.method == 'POST') {

        try {

            return res.status(201).json({
                msg: "Thêm thông báo thành công"
            });
        } catch (error) {
            return res.status(error.status).json({
                msg: error.message
            });
        }

    }

}


// Sửa thông báo
exports.update_thong_bao = async (req, res, next) => {

    let id_thong_bao = req.param.idSanPham;

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

// Xóa thông báo
exports.delete_thong_bao = async (req, res, next) => {
    let id_thong_bao = req.param.idSanPham;

    try {

        res.status(200).json({ msg: 'Xóa thành công' });

    } catch (error) {
        return res.status(error.status).json({
            msg: error.message
        });
    }
    res.status(200).json({ msg: 'xóa' });

}



