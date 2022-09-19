export default class Product {
  private _id: string;
  private _name: string;
  private _price: number;
  private _omieCode: string;
  private _valid: boolean = false;

  constructor(id: string, name: string, price: number, omieCode: string) {
    this._id = id;
    this._name = name;
    this._price = price;
    this._omieCode = omieCode;
    this.validate();
  }

  validate(): void {
    this._valid = false;

    if (this._id.length === 0) {
      throw new Error("id is required");
    }

    if (this._omieCode.length === 0) {
      throw new Error("omie code is required");
    }

    if (this._name.length === 0) {
      throw new Error("name is required");
    }

    if (this._price === 0) {
      throw new Error("price is required");
    }

    if (this._price < 0) {
      throw new Error("price must be greater than zero");
    }
    this._valid = true;
  }

  get id(): string {
    return this._id;
  }

  get omieCode(): string {
    return this._omieCode;
  }

  changeOmieCode(omieCode: string): void {
    this._omieCode = omieCode;
    this.validate()
  }

  get name(): string {
    return this._name;
  }

  changeName(name: string): void {
    this._name = name;
    this.validate()
  }

  get price(): number {
    return this._price;
  }

  changePrice(price: number): void {
    this._price = price;
    this.validate()
  }

  get valid(): boolean {
    return this._valid;
  }
}
