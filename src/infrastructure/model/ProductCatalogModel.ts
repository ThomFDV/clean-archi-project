import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ProductCatalogModel = new Schema({
    name: String,
    description: String,
    category: String,
    details: Array
});
