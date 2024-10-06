const db = require('./db');

const khuyen_mai_schema = new db.mongooes.Schema(
    {
        code: { type: db.mongooes.Schema.ObjectId, required: true },
        soTienGiam: {type:Number,required:true},
        ngayBatDau: {type:Date,require:true},
        ngayKetthuc: {type:Date,required:true},
    },
    {
        collection: 'tb_khuyen_mai'
    }
);

let khuyenMaiModel = db.mongooes.model('khuyenMaiModel', khuyen_mai_schema);

module.exports = { khuyenMaiModel };
