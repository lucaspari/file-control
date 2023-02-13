export default class Customer{
  constructor(cnpj: string, name: string, activities: string) {
    this._cnpj = cnpj
    this._name = name
    this._activities = activities
  }    private _cnpj : string;
    private _name : string;
    private _activities : string;

    public get cnpj(): string {
        return this._cnpj;
    }

    public set cnpj(cnpj: string) {
        this._cnpj = cnpj;
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get activities(): string {
        return this._activities;
    }

    public set activities(activities: string) {
        this._activities = activities;
    }

}