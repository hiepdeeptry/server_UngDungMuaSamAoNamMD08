const mongooes = require('mongoose'); 

mongooes.connect('mongodb://127.0.0.1:27017/MD08Store')
    .catch((err)=>{
        console.log("loi ket noi CSDL");
        console.log(err);
    });
module.exports = {mongooes};