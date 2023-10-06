const {Router} = require('express');
const UserController = require('../controllers/user.controller');
const {hashPass} = require('../middlewares/hashPassword');

const userRouter = Router();

userRouter.post('/sign-up', hashPass, UserController.registatrionUser); // register
userRouter.post('/sign-in', UserController.loginUser); // login
userRouter.get('/:token', UserController.checkToken);

module.exports = userRouter;