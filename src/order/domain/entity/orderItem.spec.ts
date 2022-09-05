import OrderItem from "./orderItem";

describe("Order Item unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      const item = new OrderItem("", 10, 2, 0, "p1", "omie1");
    }).toThrowError("item id is required");
  });

  it("should throw error when product id is empty", () => {
    expect(() => {
      const item = new OrderItem("o1", 10, 2, 0, "", "omie1");
    }).toThrowError("product id is required");
  });
  
  it("should throw error when omie product id is empty", () => {
    expect(() => {
      const item = new OrderItem("o1", 10, 2, 0, "p1", "");
    }).toThrowError("omie product id is required");
  });

  it("should throw error when price is zero", () => {
    expect(() => {
      const item = new OrderItem("o1", 0, 2, 0, "p1", "omie1");
    }).toThrowError("price is required");
  });

  it("should throw error when price is negative", () => {
    expect(() => {
      const item = new OrderItem("o1", -10, 2, 0, "p1", "omie1");
    }).toThrowError("price cannot be negative");
  });

  it("should throw error when quantity is zero", () => {
    expect(() => {
      const item = new OrderItem("o1", 10, 0, 0, "p1", "omie1");
    }).toThrowError("quantity is required");
  });

  it("should throw error when quantity is negative", () => {
    expect(() => {
      const item = new OrderItem("o1", 10, -2, 0, "p1", "omie1");
    }).toThrowError("quantity cannot be negative");
  });

  it("should throw error when discount is negative", () => {
    expect(() => {
      const item = new OrderItem("o1", 10, 2, -1, "p1", "omie1");
    }).toThrowError("discount cannot be negative");
  });

  it("should throw error when discount is higher than price", () => {
    expect(() => {
      const item = new OrderItem("o1", 10, 2, 21, "p1", "omie1");
    }).toThrowError("discount cannot be higher than price");
  });

  it("should change the item discount", () => {
    const item = new OrderItem("o1", 10, 2, 0, "p1", "omie1");
    let total = item.total();
    expect(total).toBe(20);

    item.changeDiscount(5);
    total = item.total();
    expect(item.discount).toBe(5);
    expect(total).toBe(10);
  });
});
