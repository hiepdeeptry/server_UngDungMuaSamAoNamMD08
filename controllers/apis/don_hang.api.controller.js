const donHangMD = require('../../models/don_hang.model');

exports.listDonhang = async (req, res, next) => {

    try {
        var listDonhang = await donHangMD.donHangModel.find();
        return res.status(200).json(
            listDonhang
        );
    } catch (error) {
        return res.status(error.status).json({
            msg: error.message
        });
    }
}