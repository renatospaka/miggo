import { Model, Table, Column, PrimaryKey, BelongsTo, ForeignKey, IsUUID } from "sequelize-typescript";
import ProductModel from "../../../../../product/infrastructure/db/sequelize/model/product.model";
import OrderModel from "./order.model";

@Table({ tableName: "order_items", timestamps: true })
export default class OrderItemModel extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column
  uuid: string;

  @IsUUID(4)
  @ForeignKey(() => OrderModel)
  @Column({ allowNull: false })
  orderId: string;

  @BelongsTo(() => OrderModel)
  order: OrderModel;

  @IsUUID(4)
  @ForeignKey(() => ProductModel)
  @Column({ allowNull: false })
  productId: string;

  @BelongsTo(() => ProductModel)
  product: ProductModel;

  @Column({ allowNull: false })
  price: number;

  @Column({ allowNull: false })
  quantity: number;

  @Column({ allowNull: false })
  discount: number;
}
