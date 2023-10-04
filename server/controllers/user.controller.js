const bcrypt = require('bcrypt');
const { User } = require('../models');

module.exports.registatrionUser = async (req, res, next) => {
    try {
        const {body, passwordHash} = req;

        const createdUser = await User.create({...body, passwordHash});

        return res.status(201).send(createdUser);
    } catch (error) {
        next(error);
    }
}

module.exports.loginUser = async (req, res, next) => {
    try {
        const { body } = req;
        const foundUser = await User.findOne({
            email: body.email
        });
        if(foundUser) {
            const result = await bcrypt.compare(body.password, foundUser.passwordHash);
            if(!result) {
                return next(new Error());
            }
            return res.status(200).send('Logged in');
        }
    } catch (error) {
        next(error);
    }
}