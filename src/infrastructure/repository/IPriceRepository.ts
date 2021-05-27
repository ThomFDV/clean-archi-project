import {PriceEntity} from "../../domain/entity/PriceEntity";

export interface IPriceRepository {
    getPriceByProductId(productId: string): PriceEntity;
}
