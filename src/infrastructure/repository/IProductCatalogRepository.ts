import {ProductCatalogEntity} from "../../domain/entity/ProductCatalogEntity";

export interface IProductCatalogRepository {
    getProductCatalogById(id?: string): Promise<ProductCatalogEntity>;
}
