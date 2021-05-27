import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserModel = new Schema({
    name: String,
    email: String,
    password: String
});
