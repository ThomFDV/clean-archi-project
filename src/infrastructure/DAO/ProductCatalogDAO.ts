import {IProductCatalogRepository} from "../repository/IProductCatalogRepository";
import {ProductCatalogEntity} from "../../domain/entity/ProductCatalogEntity";
import mongoose from "mongoose";
import {ProductCatalogModel} from "../model/ProductCatalogModel";
import {Types} from 'mongoose'
const ObjectId = Types.ObjectId;
const ProductCatalog = mongoose.model('ProductCatalog', ProductCatalogModel);

export class ProductCatalogDAO implements IProductCatalogRepository{

    public async getProductCatalogById(id?: string): Promise<ProductCatalogEntity> {
        const product = await ProductCatalog.findById(id);
        if (product === null) {
            console.error("Product not found .");
            throw Error("Product not found .")
        }
        return product;
    }
}
