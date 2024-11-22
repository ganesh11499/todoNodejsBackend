const userModel = require('../model/user.model');
const jwt = require('jsonwebtoken');

class userService {
    static async registerUser(email, password){
        try {
            const createUser = new userModel({email, password});
            return await createUser.save();
        } catch (error) {
            throw error;
        }
    }

    static async checkUser(email) {
        try {
            return await userModel.findOne({email});
        } catch (error) {
            throw error
        }
    }

    static async generateToken (tokenData, secretKey, jwtExpire) {
        return jwt.sign(tokenData, secretKey, {expiresIn: jwtExpire});
    };
}

module.exports = userService;