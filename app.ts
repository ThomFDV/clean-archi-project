import express from "express";
import * as bodyParser from "body-parser";
import mongoose = require("mongoose");
import {ConsultProductRoute} from "./infrastructure/route/ConsultProductRoute";

class App {

    public app: express.Application;
    public productRoute: ConsultProductRoute = new ConsultProductRoute();
    public mongoUrl: string = 'mongodb://clean:project@localhost:27017/project?authSource=admin';

    constructor() {
        this.app = express();
        this.config();
        this.productRoute.routes(this.app);
        this.mongoSetup();
    }

    private config(): void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // serving static files
        this.app.use(express.static('public'));
    }

    private mongoSetup(): void{
        (<any>mongoose).Promise = global.Promise;
        mongoose.connect(this.mongoUrl);
    }

}

export default new App().app;
