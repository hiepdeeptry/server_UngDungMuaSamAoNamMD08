var multer = require('multer');
var fs = require('fs');
const { query } = require('express');
const cors = require('cors');
const admin = require('firebase-admin');
const { createUserWithEmailAndPassword, signInWithEmailAndPassword } = require('firebase/auth');
const { auth } = require('../firebaseConfig');



exports.auth = (req, res) => {
    const { email,password } = req.body;
    const type = req.query.type;
    console.log(req.query.type);

    if (type === 'login') {
        signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Đăng nhập thành công
        
        res.redirect('/');
      })
      .catch((error) => {
        res.status(400).send(error.message);
      });
    }else if(type === 'register'){
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Đăng ký thành công
          res.redirect('/users')
        })
        .catch((error) => {
          // Xử lý lỗi
          res.status(400).send(error.message);
        });
    }else{
        res.status(400).send('Tham số type không hợp lệ');
    }
    
    

     

  };

  exports.showForm = (req, res, next) => {
    res.render('login/index' )
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



