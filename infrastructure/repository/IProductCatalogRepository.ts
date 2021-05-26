import {ProductCatalogEntity} from "../../domain/entity/ProductCatalogEntity";

export interface IProductCatalogRepository {
    getProductCatalogById(id?: string): ProductCatalogEntity;
    saveProductCatalog(productCatalog: ProductCatalogEntity): void;
}
