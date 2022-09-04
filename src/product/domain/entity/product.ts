export default class Product {
  private _id: string;
  private _name: string;
  private _price: number;
  private _omieCode: string;
  private _discount: number = 0;
  private _active: boolean = false;

  constructor(id: string, name: string, price: number, omieCode: string) {
    this._id = id;
    this._name = name;
    this._price = price;
    this._discount = 0;
    this._omieCode = omieCode;
    this.validate();
  }

  validate() {
    this._active = false;

    if (this._id.length === 0) {
      throw new Error("id is required");
    }

    if (this.omieCode.length === 0) {
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

    if (this._discount < 0) {
      throw new Error("discount can not be less than zero");
    }

    if (this._discount > this._price) {
      throw new Error("discount can not be greater than the price of the product");
    }
  }

  get id(): string {
    return this._id;
  }

  get omieCode(): string {
    return this.omieCode;
  }

  changeOmieCode(omieCode: string): void {
    this._omieCode = omieCode;
    this.validate()
  }

  get name(): string {
    return this.name;
  }

  changeName(name: string): void {
    this._name = name;
    this.validate()
  }

  get price(): number {
    return this.price;
  }

  changePrice(price: number): void {
    this._price = price;
    this.validate()
  }
}