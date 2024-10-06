const db = require('./db');

const san_pham_schema = new db.mongooes.Schema(
    {
        idLoaiHang: { type: db.mongooes.Schema.ObjectId, ref: 'loaiHangModel' },
        tenSanPham: { type: String, required: true },
        kichCo: { type: String, required: true },
        mauSac: { type: String, required: true },
        soLuong: { type: Number, require: true },
        gia: { type: Number, require: true },
        moTa: { type: String, required: true },
        anh: { type: String, required: true },

    },
    {
        collection: 'tb_san_pham'
    }
);

let sanPhamModel = db.mongooes.model('sanPhamModel', san_pham_schema);

module.exports = { sanPhamModel };
