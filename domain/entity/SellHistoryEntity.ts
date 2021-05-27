export class SellHistoryEntity {
    private _productId: string;
    private _userId: string;
    private _date: Date;

    constructor(productId: string, userId: string, date: Date) {
        this._productId = productId;
        this._userId = userId;
        this._date = date;
    }

    get productId(): string {
        return this._productId;
    }

    set productId(value: string) {
        this._productId = value;
    }

    get userId(): string {
        return this._userId;
    }

    set userId(value: string) {
        this._userId = value;
    }

    get date(): Date {
        return this._date;
    }

    set date(value: Date) {
        this._date = value;
    }
}
