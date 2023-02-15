export default class Transaction{
    private _sellerId : number;
    private _sales : any;
    private _sellerName : string;
    constructor(sellerId: number, sales: any, sellerName: string) {
        this._sellerId = sellerId
        this._sales = sales
        this._sellerName = sellerName
    }   
    public get sellerId(): number {
        return this._sellerId;
    }

    public set sellerId(sellerId: number) {
        this._sellerId = sellerId;
    }

    public get sales(): any {
        return this._sales;
    }

    public set sales(sales: any) {
        this._sales = sales;
    }

    public get sellerName(): string {
        return this._sellerName;
    }

    public set sellerName(sellerName: string) {
        this._sellerName = sellerName;
    }

}