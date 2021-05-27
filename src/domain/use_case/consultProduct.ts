import { Request, Response } from 'express';
import {PriceDAO} from "../../infrastructure/DAO/PriceDAO";
import {SellHistoryDAO} from "../../infrastructure/DAO/SellHistoryDAO";
import {ProductCatalogDAO} from "../../infrastructure/DAO/ProductCatalogDAO";
import {SellHistoryEntity} from "../entity/SellHistoryEntity";

export class ConsultProduct {

    private readonly productCatalogDAO: ProductCatalogDAO;
    private readonly priceDAO: PriceDAO;
    private readonly sellHistoryDAO: SellHistoryDAO;

    constructor(productCatalogDAO: ProductCatalogDAO, priceDAO: PriceDAO, sellHistory: SellHistoryDAO) {
        this.productCatalogDAO = productCatalogDAO;
        this.priceDAO = priceDAO;
        this.sellHistoryDAO = sellHistory;
        console.log({"this.productCatalogDAO " : this.productCatalogDAO});
    }

    public getProductCatalog(req: Request, res: Response) {
        console.log({"this.productCatalogDAO " : this.productCatalogDAO});
        const productId = req.params.productId;
        const userId = req.query.userId;
        const product = this.productCatalogDAO.getProductCatalogById(productId);
        let { price } = this.priceDAO.getPriceByProductId(productId);
        if (!!userId) {
            const sellHistoryList = this.sellHistoryDAO.getSellHistoryByUserId(userId.toString());
            const sellProductHistoryList = this.sellHistoryDAO.getSellHistoryByUserAndProductIds(userId.toString(), productId);
            price = this.applyDiscountRegardingSellHistory(price, sellHistoryList, sellProductHistoryList);
        }
        if (!!product) {
            res.json({product, price});
        } else {
            res.status(404);
        }
    }

    private applyDiscountRegardingSellHistory(
        price: number,
        sellHistory: SellHistoryEntity[],
        sellProductHistory: SellHistoryEntity[]
    ): number {
        try {
            const filtered6MonthHistory = sellHistory.filter(
                (val) => val.date.getMonth() > new Date().getMonth() - 6
            );
            if (filtered6MonthHistory.length && filtered6MonthHistory.length >= 3) price *= 0.9;

            const filtered1YearHistory = sellProductHistory.filter(
                (val) => val.date.getFullYear() > new Date().getFullYear() - 1
            );
            if (filtered1YearHistory.length && filtered1YearHistory.length > 5) price *= 1.05;
        } catch (e) {
            console.error(e);
        }
        return price;
    }
}
