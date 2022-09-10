import { BelongsTo, Column, CreatedAt, ForeignKey, Model, NotNull, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";
import Order from "./order.model";

@Table({ tableName: "order_items", timestamps: true })
export default class OrderItem extends Model {
  @PrimaryKey
  @Column
  uuidItem: string;

  @ForeignKey(() => Order)
  @Column({ allowNull:false })
  orderId: string;

  @BelongsTo(() => Order)
  order: Order;

  @Column({ allowNull:false })
  productId: string;

  @Column({ allowNull:false })
  productOmieId: string;

  @Column({ allowNull:false })
  price: number;

  @Column({ allowNull:false })
  quantity: number;

  @Column({ allowNull:false })
  discount: number;

  @CreatedAt
  @Column({ allowNull:false })
  createdAt: Date;

  @UpdatedAt
  @Column({ allowNull:false })
  updatedAt: Date;
}
