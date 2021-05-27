import mongoose from "mongoose";
import {ISellHistoryRepository} from "../repository/ISellHistoryRepository";
import {SellHistoryEntity} from "../../domain/entity/SellHistoryEntity";
import {SellHistoryModel} from "../model/SellHistoryModel";
const SellHistory = mongoose.model('SellHistory', SellHistoryModel);

export class SellHistoryDAO implements ISellHistoryRepository {

    getSellHistoryByUserAndProductIds(userId: string, productId: string): SellHistoryEntity[] {
        return SellHistory.find({productId, userId});
    }

    getSellHistoryByUserId(userId: string): SellHistoryEntity[] {
        return SellHistory.find({userId});
    }

}
