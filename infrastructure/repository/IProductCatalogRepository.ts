import {ProductCatalogEntity} from "../../domain/entity/ProductCatalogEntity";

export interface IProductCatalogRepository {
    getProductCatalogById(id?: number): ProductCatalogEntity;
    saveProductCatalog(productCatalog: ProductCatalogEntity): void;
}
