import Order from "./order";
import OrderItem from "./orderItem";

describe("Order unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      const item = new OrderItem("o1", 10, 2, 0, "p1", "omie1");
      const order = new Order("", "Customer 1", 10, 0, [item]);
    }).toThrowError("id is required");
  });

  it("should throw error when freight is negative", () => {
    expect(() => {
      const item = new OrderItem("o1", 10, 2, 0, "p1", "omie1");
      const order = new Order("o1", "Customer 1", -10, 0, [item]);
    }).toThrowError("freight cannot be negative");
  });

  it("should throw error when discount is negative", () => {
    expect(() => {
      const item = new OrderItem("o1", 10, 2, 0, "p1", "omie1");
      const order = new Order("o1", "Customer 1", 10, -10, [item]);
    }).toThrowError("discount cannot be negative");
  });

  it("should change the order discount", () => {
    const item = new OrderItem("o1", 10, 2, 0, "p1", "omie1");
    const order = new Order("o1", "Customer 1", 10, 0, [item]);
    let total = order.total();
    expect(total).toBe(30);

    order.changeDiscount(5);
    total = order.total();
    expect(order.discount).toBe(5);
    expect(total).toBe(25);
  });

  it("should throw error when customer id is empty", () => {
    expect(() => {
      const item = new OrderItem("o1", 10, 2, 0, "p1", "omie1");
      const order = new Order("o1", "", 10, 0, [item]);
    }).toThrowError("customer id is required");
  });

  it("should throw error when order items is empty", () => {
    expect(() => {
      const order = new Order("o1", "123", 10, 0, []);
    }).toThrowError("order items list cannot be empty");
  });

  it("should calculate total", () => {
    const item = new OrderItem("i1", 100, 2, 0, "p1", "omie1");
    const order = new Order("o1", "Customer 1", 10, 0, [item]);
    const total = order.total();
    expect(total).toBe(210);

    const item2 = new OrderItem("i2", 200, 2, 10, "p2", "omie2");
    const order2 = new Order("o2", "Customer 2", 10, 0, [item, item2]);
    const total2 = order2.total();
    expect(total2).toBe(590);
  });

  it("should be both order and item valid", () => {
    const item = new OrderItem("i1", 100, 2, 0, "p1", "omie1");
    expect(item.valid()).toBe(true);

    const order = new Order("o1", "Customer 1", 10, 0, [item]);
    expect(order.valid()).toBe(true);
  });
});
