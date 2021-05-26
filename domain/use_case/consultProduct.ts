import {IUserRepository} from "../../infrastructure/repository/IUserRepository";
import {IProductCatalogRepository} from "../../infrastructure/repository/IProductCatalogRepository";

export class ConsultProduct {

    userRepository!: IUserRepository;
    productCatalog!: IProductCatalogRepository;


    constructor(userRepository: IUserRepository, productCatalog: IProductCatalogRepository) {
        this.userRepository = userRepository;
        this.productCatalog = productCatalog;
    }


}
