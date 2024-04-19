const { getAll, create, getOne, remove, update, veryCode, login, logged, resetpassword, updatePassword } = require('../controllers/user.controllers');
const express = require('express');
const { verifyJwt} = require ('../utils/verifyJWT');

const routerUser = express.Router();

routerUser.route('/')
    .get( verifyJwt, getAll) // 🔐 Rutas protegidas
    .post(create);

routerUser.route('/login')
    .post(login)

routerUser.route('/me')
    .get(verifyJwt, logged) // 🔐 Rutas protegidas

routerUser.route('/reset_password')
    .post(resetpassword)    

routerUser.route('/verify/:code')
    .get(veryCode ) 

routerUser.route('/reset_password/:code')  
    .post(updatePassword)  

routerUser.route('/:id')
    .get(verifyJwt, getOne) //🔐 Rutas protegidas
    .delete(verifyJwt, remove) //🔐 Rutas protegidas
    .put(verifyJwt, update); //🔐 Rutas protegidas

module.exports = routerUser;