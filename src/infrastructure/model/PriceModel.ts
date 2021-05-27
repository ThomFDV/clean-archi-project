import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const PriceModel = new Schema({
    productId: String,
    updateDate: Date,
    price: Number
});
