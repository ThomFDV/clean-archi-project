import * as mongoose from 'mongoose';
import { ProductCatalogModel } from "../../infrastructure/model/ProductCatalogModel";
import { Request, Response } from 'express';
import {CallbackError} from "mongoose";
import {ProductCatalogEntity} from "../entity/ProductCatalogEntity";
import {ProductCatalogDAO} from "../../infrastructure/productCatalogDAO";

const ProductCatalog = mongoose.model('ProductCatalog', ProductCatalogModel);

export class ConsultProduct {

    // productCatalogDAO!: ProductCatalogDAO;
    //
    //
    // constructor(productCatalogDAO: ProductCatalogDAO) {
    //     this.productCatalogDAO = productCatalogDAO;
    // }

    public addNewProduct (req: Request, res: Response) {
        let newProduct = new ProductCatalog(req.body);

        newProduct.save((err: CallbackError, product: ProductCatalogEntity) => {
            if(err){
                res.send(err);
            }
            res.json(product);
        });
    }

    public getProductCatalog(req: Request, res: Response) {
        ProductCatalog.findById(req.params.productId, (err: CallbackError, product: any) => {
            if (!!product) {
                res.json(product);
            } else {
                res.status(404);
            }
        });
        // const product = this.productCatalogDAO.getProductCatalogById();

    }
}
