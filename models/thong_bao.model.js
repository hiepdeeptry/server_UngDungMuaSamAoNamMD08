const db = require('./db');

const thong_bao_schema = new db.mongooes.Schema(
    {
        idNguoiDung: { type: db.mongooes.Schema.ObjectId, ref: 'nguoiDungModel' },
        thongBao: { type: String, required: true }

    },
    {
        collection: 'tb_thong_bao'
    }
);

let sanPhamModel = db.mongooes.model('sanPhamModel', thong_bao_schema);

module.exports = { sanPhamModel };
