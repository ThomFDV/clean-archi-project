import mongoose from "mongoose";
import {ProductCatalogModel} from "../model/ProductCatalogModel";
import {IPriceRepository} from "../repository/IPriceRepository";
import {PriceEntity} from "../../domain/entity/PriceEntity";
const ProductCatalog = mongoose.model('ProductCatalog', ProductCatalogModel);

export class PriceDAO implements IPriceRepository {

    getPriceByProductId(id?: string): PriceEntity {
        return ProductCatalog.find({productId: id});
    }
}
