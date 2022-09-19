import Order from "../../../domain/entity/order";
import OrderRepositoryInterface from "../../../domain/repository/order.interface";
import OrderModel from "../../db/sequelize/model/order.model";

export default class OrderRepository implements OrderRepositoryInterface {
  find(id: string): Promise<Order> {
    throw new Error("Method not implemented.");
  }

  findAll(): Promise<Order> {
    throw new Error("Method not implemented.");
  }

  async create(entity: Order): Promise<void> {
    const total = 0;

    await OrderModel.create({
      uuid: entity.id,
      userId: entity.userId,
      freight: entity.freight,
      discount: entity.discount,

      // total: entity.items.reduce((acc, item) => acc + (item.total), 0)
    });
  }
}
