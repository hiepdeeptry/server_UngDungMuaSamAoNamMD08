const thongBaoMD = require('../../models/thong_bao.model');

exports.listThongBao = async (req, res, next) => {

    try {
        var listThongBao = await thongBaoMD.thongBoaModel.find();
        return res.status(200).json(
            listThongBao
        );
    } catch (error) {
        return res.status(error.status).json({
            msg: error.message
        });
    }
}