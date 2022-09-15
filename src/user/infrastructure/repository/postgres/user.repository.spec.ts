import { Sequelize } from "sequelize-typescript";
import OrderModel from "../../../../order/infrastructure/db/sequelize/model/order.model";
import OrderItemModel from "../../../../order/infrastructure/db/sequelize/model/orderItem.model";
import ProductModel from "../../../../product/infrastructure/db/sequelize/model/product.model";
import User from "../../../domain/entity/user";
import UserModel from "../../db/sequelize/model/user.model";
import UserRepository from "./user.repository";
import { v4 } from "uuid";

describe("Customer repository test", () => {
  let sequelize: Sequelize;
  const uuid = v4();

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });
    
    sequelize.addModels([UserModel, ProductModel, OrderModel, OrderItemModel]);
    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });

  it("should find a user", async () =>{
    const userRepo = new UserRepository();
    const user = new User(uuid, "User 1", "email@conta.com", "omie 1");
    // await userRepo.create(user);
    
    // const userResult = user;
    const userResult = await userRepo.find(user.id);
    expect(user).toStrictEqual(userResult);
  });
});
