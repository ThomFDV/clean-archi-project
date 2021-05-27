export class PriceEntity {
    private _productId: number;
    private _updateDate: Date;
    private _price: number;


    constructor(productId: number, updateDate: Date, price: number) {
        this._productId = productId;
        this._updateDate = updateDate;
        this._price = price;
    }


    get productId(): number {
        return this._productId;
    }

    set productId(value: number) {
        this._productId = value;
    }

    get updateDate(): Date {
        return this._updateDate;
    }

    set updateDate(value: Date) {
        this._updateDate = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }
}
