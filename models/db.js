const mongooes = require('mongoose'); 

mongooes.connect('mongodb+srv://nvanhiep203:hiepnv123@md08store.q6psg.mongodb.net/UngDungMuaSamAoNamMD08?retryWrites=true&w=majority&appName=md08store')
    .catch((err)=>{
        console.log("loi ket noi CSDL");
        console.log(err);
    });

// const connectDB = async () => {
//     try {
//         await mongooes.connect('mongodb+srv://nvanhiep203:<db_password>@md08store.q6psg.mongodb.net/UngDungMuaSamAoNamMD08?retryWrites=true&w=majority&appName=md08store')
//         console.log("Kết nối db thành công!");
//     } catch (error) {
//         console.log("loi ket noi CSDL");
//         console.log(error.message);
//     }
// }

module.exports = {mongooes};