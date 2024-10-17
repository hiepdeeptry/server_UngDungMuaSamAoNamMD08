const sanPhamMD = require('../../models/san_pham.model');

exports.listSanPham = async (req, res, next) => {

    try {
        var listSanPham = await sanPhamMD.sanPhamModel.find();
        return res.status(200).json(
            listSanPham
        );
    } catch (error) {
        return res.status(error.status).json({
            msg: error.message
        });
    }
}