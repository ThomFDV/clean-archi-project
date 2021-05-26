import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserModel = new Schema({
    name: String,
    email: String,
    password: String
});

module.exports = mongoose.model('User', UserModel);
