const db = require('./db');

const don_hang_schema = new db.mongooes.Schema(
    {
        idNguoiDung: { type: db.mongooes.Schema.ObjectId, ref: 'nguoiDungModel' },
        idKhuyenMai: { type: db.mongooes.Schema.ObjectId, ref: 'khuyenMaiModel' },
        tongTien: { type: Number, required: true },
        trangThai: { type: String, required: true },
        thoiGian: { type: Date, required: true }
    },
    {
        collection: 'tb_don_hang'
    }
);

let donHangModel = db.mongooes.model('donHangModel',don_hang_schema);

module.exports = {donHangModel};
