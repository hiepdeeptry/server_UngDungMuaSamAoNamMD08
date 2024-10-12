var multer = require('multer');
var fs = require('fs');
const { query } = require('express');
const cors = require('cors');
const admin = require('firebase-admin');
const { createUserWithEmailAndPassword, signInWithEmailAndPassword } = require('firebase/auth');
const { auth } = require('../firebaseConfig');
const notifier = require('node-notifier');
const path = require('path');


exports.auth = (req, res) => {
    const { email,password } = req.body;
    const type = req.query.type;
    console.log(req.query.type);

    if (type === 'login') {
        signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Đăng nhập thành công
        notifier.notify({
            title: 'Đăng nhập thành công',
            message: 'Chào mừng bạn quay trở lại!',
            sound: true, // Tùy chọn để phát âm thanh thông báo,
            appID:"Shop bán áo MD08",
            icon: path.join(__dirname, '../public/images/logoMD08_128x128.png'),
          });
        res.redirect('/');
      })
      .catch((error) => {
        notifier.notify({
            title: 'Lỗi đăng nhập',
            message: 'Sai tài khoản hoặc mật khẩu\nĐăng nhập thất bại! Vui lòng thử lại.',
            sound: true // Tùy chọn để phát âm thanh thông báo
          });
        return res.render('login/index');
      });
    }else if(type === 'register'){
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Đăng ký thành công
          notifier.notify({
            title: 'Thành công',
            message: 'Tạo tài khoản thành công!\n Chào mừng bạn.',
            sound: true // Tùy chọn để phát âm thanh thông báo
          });
          res.redirect('/auth')
        })
        .catch((error) => {
          // Xử lý lỗi
          notifier.notify({
            title: 'Lỗi đăng ký',
            message: 'Sai tài khoản hoặc mật khẩu\nĐăng nhập thất bại! Vui lòng thử lại.',
            sound: true // Tùy chọn để phát âm thanh thông báo
          });
        return  res.status(400).send(error.message);
        });
    }else{
        res.status(400).send('Tham số type không hợp lệ');
    }
    
    

    
  };

  exports.showForm = (req, res, next) => {
    res.render('login/index')
}

//   exports.register = (req, res) => {
//     const { email, password } = req.body;
  
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // Đăng ký thành công
//         res.status(200).send('Đăng ký thành công');
//       })
//       .catch((error) => {
//         // Xử lý lỗi
//         res.status(400).send(error.message);
//       });
//   };



