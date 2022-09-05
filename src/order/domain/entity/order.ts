import OrderItem from "./orderItem";

export default class Order {
  private _id: string;
  private _customerId: string;
  private _freight: number;
  private _discount: number;
  private _items:OrderItem[];
  private _total: number;
  private _totalDiscount: number;
  private _valid: boolean = false;

  constructor(id: string, customerId: string, freight: number, discount: number, items: OrderItem[]) {
    this._id = id;
    this._customerId = customerId;
    this._freight = freight;
    this._discount = discount;
    this._items = items;
    this.validate();
  }

  private validate() {
    this._valid = false;
    if (this._id.length === 0) {
      throw new Error("id is required");
    }

    if (this._customerId.length === 0) {
      throw new Error("customer id is required");
    }

    if (this._items.length === 0) {
      throw new Error("order items list cannot be empty");
    }

    if (this._discount < 0) {
      throw new Error("total discount cannot be negative");
    }

    if (this._freight < 0) {
      throw new Error("freight cannot be negative");
    }

    this.total();
    this._valid = true;
  }

  get id(): string {
    return this._id;
  }

  get customerId(): string {
    return this._customerId;
  }

  get discount(): number {
    return this._discount;
  }

  changeDiscount(discount: number) {
    this._discount = discount;
    this.validate();
  }

  get freight(): number {
    return this._freight;
  }

  changeFreight(freight: number) {
    this._freight = freight;
    this.validate();
  }

  private totalDiscount(): number {
    this._totalDiscount = this._items.reduce((acc, item) => acc + item.discount, 0);
    return this._totalDiscount;
  }

  total(): number {
    this._total = this._items.reduce((acc, item) => acc + (item.total()), 0) + this._freight;
    this.totalDiscount();
    return this._total;
  }

  valid(): boolean {
    return this._valid;
  }
}
