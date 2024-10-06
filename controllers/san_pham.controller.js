var multer = require('multer');
var fs = require('fs');



// Get list sản phẩm
exports.list_san_pham = async (req, res, next) => {
    try {
        return res.status(200).json(

        );
    } catch (error) {
        return res.status(error.status).json({
            msg: error.message
        });
    }
}


// Thêm sản phẩm
exports.add_san_pham = async (req, res, next) => {


    if (req.method == 'POST') {

        try {

            return res.status(201).json({
                msg: "Thêm sản phẩm thành công"
            });
        } catch (error) {
            return res.status(error.status).json({
                msg: error.message
            });
        }

    }

}


// Sửa sản phẩm
exports.update_san_pham = async (req, res, next) => {

    let id_san_pham = req.param.idSanPham;

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

// Xóa sản phẩm
exports.delete_san_pham = async (req, res, next) => {
    let id_san_pham = req.param.idSanPham;

    try {

        res.status(200).json({ msg: 'Xóa thành công' });

    } catch (error) {
        return res.status(error.status).json({
            msg: error.message
        });
    }
    res.status(200).json({ msg: 'xóa' });

}



