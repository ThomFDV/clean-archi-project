import express, {Request, Response} from "express";
import {ConsultProduct} from "../../domain/use_case/consultProduct";
import {ProductCatalogDAO} from "../productCatalogDAO";

export class ConsultProductRoute {

    public consultProduct: ConsultProduct = new ConsultProduct();

    public routes(app: express.Application): void {
        console.log(this.consultProduct);

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
