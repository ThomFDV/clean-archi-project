import express, {Request, Response} from "express";
import {ConsultProduct} from "../../domain/use_case/consultProduct";
import {ProductCatalogDAO} from "../DAO/ProductCatalogDAO";

export class ConsultProductRoute {

    public consultProduct: ConsultProduct = new ConsultProduct();


    constructor() {
        console.log(this.consultProduct);
    }

    public routes(app: express.Application): void {

        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET request successfulll!!!!'
                })
            })

        app.route('/product').post(this.consultProduct.addNewProduct);
        app.route('/product/:productId').get(this.consultProduct.getProductCatalog);
    }
}
