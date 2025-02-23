const mongoose = require('mongoose');
const db = require('../config/db')
const bcrypt = require('bcrypt');

const {Schema} = mongoose;

const userSchema = new Schema({
    email: { 
        type: String,
        lowercase: true,
        require: true,
        unique: true
    },

    password: {
        type: String,
        require: true,

    }
})

//Store hashed password in db
userSchema.pre('save', async function (){
    try {
        const user = this;
        const salt  = await(bcrypt.genSalt(10));
        const hashedPassword = await bcrypt.hash(user.password, salt);
        user.password = hashedPassword;
    } catch (error) {
        throw error;
    }
})


userSchema.methods.comparePassword = async function(userPassword){
    try {
        const isMatch = await bcrypt.compare(userPassword, this.password);
        return isMatch;
    } catch (error) {
        throw error;
    }
}

const UserModel = db.model('user', userSchema);

module.exports = UserModel;