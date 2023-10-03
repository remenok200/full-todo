const {Router} = require('express');
const UserController = require('../controllers/user.controller');

const userRouter = Router();

userRouter.post('/sign-up', UserController.registatrionUser); // register
userRouter.post('/sign-in', UserController.loginUser); // login

module.exports = userRouter;