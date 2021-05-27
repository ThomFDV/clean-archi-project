import {Schema} from 'mongoose';

export const UserModel = new Schema({
    name: String,
    email: String,
    password: String
});
