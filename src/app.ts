import express from "express";
import * as bodyParser from "body-parser";
import {ConsultProductRoute} from "./infrastructure/route/ConsultProductRoute";
import {MongoMemoryServer} from 'mongodb-memory-server';
import {Mongoose, connect} from "mongoose";
import {ConsultProduct} from "./domain/use_case/consultProduct";
import {ProductCatalogDAO} from "./infrastructure/DAO/ProductCatalogDAO";
import {PriceDAO} from "./infrastructure/DAO/PriceDAO";
import {SellHistoryDAO} from "./infrastructure/DAO/SellHistoryDAO";

interface IConnection {
    connection: any;
}

export class App {

    public app: express.Application;

    private constructor(private readonly connection: IConnection,
                        private readonly productRoute :ConsultProductRoute) {
        this.app = express();
        this.config();
        this.productRoute.routes(this.app);
    }

    private config(): void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // serving static files
        this.app.use(express.static('public'));
    }

    public static async createApp(): Promise<App> {
        const mongod = new MongoMemoryServer();
        const mongoURI = await mongod.getUri();
        const mongoose : Mongoose = await connect(mongoURI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            // authSource: 'admin',
        });
        const connection = {
            connection: mongoose
        } as IConnection;

        const productCatalogDAO = new ProductCatalogDAO();
        const priceDAO = new PriceDAO();
        const sellHistory = new SellHistoryDAO();
        const consultProduct = new ConsultProduct(productCatalogDAO, priceDAO, sellHistory);
        const consultProductRoute = new ConsultProductRoute(consultProduct);

        return new App(connection, consultProductRoute);
    }

}

