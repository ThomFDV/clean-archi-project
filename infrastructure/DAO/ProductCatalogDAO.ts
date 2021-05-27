import {IProductCatalogRepository} from "../repository/IProductCatalogRepository";
import {ProductCatalogEntity} from "../../domain/entity/ProductCatalogEntity";
import mongoose from "mongoose";
import {ProductCatalogModel} from "../model/ProductCatalogModel";
const ProductCatalog = mongoose.model('ProductCatalog', ProductCatalogModel);

export class ProductCatalogDAO implements IProductCatalogRepository{

    getProductCatalogById(id?: string): ProductCatalogEntity {
        const product = ProductCatalog.findById(id);
        console.log(product);
        return product;
    }
}
