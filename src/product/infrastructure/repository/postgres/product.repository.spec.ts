import { Sequelize } from "sequelize-typescript";
import OrderModel from "../../../../order/infrastructure/db/sequelize/model/order.model";
import OrderItemModel from "../../../../order/infrastructure/db/sequelize/model/orderItem.model";
import UserModel from "../../../../user/infrastructure/db/sequelize/model/user.model";
import Product from "../../../domain/entity/product";
import ProductModel from "../../db/sequelize/model/product.model";
import ProductRepository from "./product.repository";

describe("Product repository test", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });

    sequelize.addModels([ProductModel, UserModel,  OrderModel, OrderItemModel]);
    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });

  it("should find a product", async () =>{
    const productRepo = new ProductRepository();
    const product = new Product("1", "product 1", 100, "omie-product")
    await productRepo.create(product);
    
    const productResult = await productRepo.find(product.id);
    expect(product).toStrictEqual(productResult);
  });
});
