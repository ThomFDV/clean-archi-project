import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const SellHistoryModel = new Schema({
    userId: String,
    productId: String,
    date: Date
});
