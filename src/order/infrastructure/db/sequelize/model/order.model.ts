import { AllowNull, Column, CreatedAt, HasMany, Model, NotNull, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";
import OrderItem from "./orderItem.model";

@Table({ tableName: "orders", timestamps: true })
export default class OrderModel extends Model {
  @PrimaryKey
  @Column
  uuid: string;

  @Column({ allowNull:false })
  userId: string;

  @Column({ allowNull:false })
  freight: number;

  @Column
  discount: number;

  @Column({ allowNull:false })
  total: number;

  @CreatedAt
  @Column({ allowNull:false })
  createdAt: Date;

  @UpdatedAt
  @Column({ allowNull:false })
  updatedAt: Date;

  @HasMany(() => OrderItem)
  items?: OrderItem[];
}
