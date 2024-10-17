const loaiHangMD = require('../../models/loai_hang.model');

exports.listLoaiHang = async (req, res, next) => {

    try {
        var listLoaiHang = await loaiHangMD.loaiHangModel.find();
        return res.status(200).json(
            listLoaiHang
        );
    } catch (error) {
        return res.status(error.status).json({
            msg: error.message
        });
    }
}