const khuyenMaiMD = require('../../models/khuyen_mai.model');

exports.listKhuyenMai = async (req, res, next) => {

    try {
        var listKhuyenMai = await khuyenMaiMD.khuyenMaiModel.find();
        return res.status(200).json(
            listKhuyenMai
        );
    } catch (error) {
        return res.status(error.status).json({
            msg: error.message
        });
    }
}