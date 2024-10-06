var multer = require('multer');
var fs = require('fs');



// Get list đơn hàng
exports.list_don_hang = async (req, res, next) => {

    try {

        return res.status(200).json(

        );
    } catch (error) {
        return res.status(error.status).json({
            msg: error.message
        });
    }
}

// Thêm đơn hàng
exports.add_don_hang = async (req, res, next) => {


    if (req.method == 'POST') {

        try {

            return res.status(201).json({
                msg: "Thêm đơn hàng thành công"
            });
        } catch (error) {
            return res.status(error.status).json({
                msg: error.message
            });
        }

    }

}


// Sửa đơn hàng
exports.update_don_hang = async (req, res, next) => {

    let id_don_hang = req.param.idDonHang;

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

// Xóa đơn hàng
exports.delete_don_hang = async (req, res, next) => {
    let id_don_hang = req.param.idDonHang;

    try {

        res.status(200).json({ msg: 'Xóa thành công' });

    } catch (error) {
        return res.status(error.status).json({
            msg: error.message
        });
    }
    res.status(200).json({ msg: 'xóa' });

}



