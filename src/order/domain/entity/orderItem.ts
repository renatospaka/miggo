export default class OrderItem {
  private _id: string;
  private _productId: string;
  private _productOmieId: string;
  private _name: string;
  private _price: number;
  private _quantity: number;
  private _total: number;
  private _discount: number;
  private _valid: boolean = false;

  constructor(id: string, price: number, quantity: number, discount: number, productId: string, productOmieId: string) {
    this._id = id;
    this._price = price;
    this._quantity = quantity;
    this._discount = discount;
    this._productId = productId;
    this._productOmieId = productOmieId;
    this._valid = false;
    this.validate();
    this.total();
  }

  private validate() {
    this._valid = false;
    this.total();

    if (this._id.length === 0) {
      throw new Error("item id is required");
    }

    if (this._productId.length === 0) {
      throw new Error("product id is required");
    }

    if (this._productOmieId.length === 0) {
      throw new Error("omie product id is required");
    }

    if (this._price === 0) {
      throw new Error("price is required");
    }

    if (this._price < 0) {
      throw new Error("price cannot be negative");
    }

    if (this._quantity === 0) {
      throw new Error("quantity is required");
    }

    if (this._quantity < 0) {
      throw new Error("quantity cannot be negative");
    }

    if (this._discount < 0) {
      throw new Error("discount cannot be negative");
    }

    if (this.discount > this._price) {
      throw new Error("discount cannot be higher than price");
    }

    this._valid = true;
  }

  get id(): string {
    return this._id;
  }

  get price(): number {
    return this._price;
  }

  get quantity(): number {
    return this._quantity;
  }

  changeQuantity(quantity: number) {
    this._quantity = quantity;
    this.validate();
  }

  get discount(): number {
    return this._discount;
  }

  changeDiscount(discount: number) {
    this._discount = discount;
    this.validate();
  }

  get productId(): string {
    return this._productId;
  }

  get productOmieId(): string {
    return this._productOmieId;
  }

  total() {
    this._total = (this.price - this._discount) * this._quantity;
    return this._total;
  }

  valid(): boolean {
    return this._valid;
  }
}
