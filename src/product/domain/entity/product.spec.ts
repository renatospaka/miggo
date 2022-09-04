import Product from "./product";

describe("Product unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      const product = new Product("", "Product 1", 100, "Product Omie");
    }).toThrowError("id is required");
  });

  it("should throw error when name is empty", () => {
    expect(() => {
      const product = new Product("1", "", 100, "Product Omie");
    }).toThrowError("name is required");
  });

  it("should throw error when price is zero", () => {
    expect(() => {
      const product = new Product("1", "Product 1", 0, "Product Omie");
    }).toThrowError("price is required");
  });

  it("should throw error when price is less than zero", () => {
    expect(() => {
      const product = new Product("1", "Product 1", -1, "Product Omie");
    }).toThrowError("price must be greater than zero");
  });

  it("should change name", () => {
    const product = new Product("1", "Product 1", 100, "Product Omie");
    product.changeName("Product 2");
    expect(product.name).toBe("Product 2");
  });

  it("should change price", () => {
    const product = new Product("1", "Product 1", 100, "Product Omie");
    product.changePrice(150);
    expect(product.price).toBe(150);
  });
});
