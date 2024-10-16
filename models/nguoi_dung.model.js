const db = require('./db');

const nguoi_dung_schema = new db.mongooes.Schema(
    {
        email:{},
        matKhau:{},
        tenNguoiDung:{},
        soDienThoai:{},
        // địa chỉ chi tiết 
        loai:{}
    },
    {
        collection: 'tb_nguoi_dung'
    }
);

let nguoiDungModel = db.mongooes.model('nguoiDungModel', nguoi_dung_schema);

module.exports = { nguoiDungModel };
