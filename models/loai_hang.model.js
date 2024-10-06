const db = require('./db');

const loai_hang_schema = new db.mongooes.Schema(
    {
        tenLoai: { type: String, required: true }
    },
    {
        collection: 'tb_loai_hang'
    }
);

let loaiHangModel = db.mongooes.model('loaiHangModel', loai_hang_schema);

module.exports = { loaiHangModel };
