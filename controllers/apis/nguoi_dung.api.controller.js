const nguoiDungMD = require('../../models/nguoi_dung.model');

exports.listNguoiDung = async (req, res, next) => {

    try {
        var listNguoiDung = await nguoiDungMD.nguoiDungModel.find();
        return res.status(200).json(
            listNguoiDung
        );
    } catch (error) {
        return res.status(error.status).json({
            msg: error.message
        });
    }
}