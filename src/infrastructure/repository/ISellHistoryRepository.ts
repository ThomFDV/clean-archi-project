import {SellHistoryEntity} from "../../domain/entity/SellHistoryEntity";

export interface ISellHistoryRepository {
    getSellHistoryByUserAndProductIds(userId: string, productId: string): SellHistoryEntity[];
    getSellHistoryByUserId(id: string): SellHistoryEntity[];
}
