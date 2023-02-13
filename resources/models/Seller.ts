export default class Seller {
    constructor(cpf: string, name: string, salary: number) {
        this._cpf = cpf;
        this._name = name;
        this._salary = salary;
    }
    private _cpf: string;
    private _name: string;
    private _salary: number;

    public get cpf(): string {
        return this._cpf;
    }

    public set cpf(cpf: string) {
        this._cpf = cpf;
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get salary(): number {
        return this._salary;
    }

    public set salary(salary: number) {
        this._salary = salary;
    }
}
