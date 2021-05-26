export class ProductCatalogEntity {
    private _id!: number;
    private _name!: string;
    private _description!: string;
    private _category!: string;
    private _details!: any;


    constructor(id: number, name: string, description: string, category: string, details: any) {
        this._id = id;
        this._name = name;
        this._description = description;
        this._category = category;
        this._details = details;
    }


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get category(): string {
        return this._category;
    }

    set category(value: string) {
        this._category = value;
    }

    get details(): any {
        return this._details;
    }

    set details(value: any) {
        this._details = value;
    }
}
