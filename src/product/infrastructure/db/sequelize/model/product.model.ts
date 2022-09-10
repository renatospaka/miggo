import { Model, Table, PrimaryKey, Column, HasMany, IsUUID } from "sequelize-typescript";
import OrderItemModel from "../../../../../order/infrastructure/db/sequelize/model/orderItem.model";

@Table({
  tableName: "products",
  timestamps: true,
})
export default class ProductModel extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column
  uuid: string;

  @Column({ allowNull: false })
  omieCode: string;

  @Column({ allowNull: false })
  name: string;

  @Column({ allowNull: false })
  price: number;

  @HasMany(() => OrderItemModel)
  orderItems: OrderItemModel[];
}
