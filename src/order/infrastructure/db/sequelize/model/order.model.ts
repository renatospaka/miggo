import { Model, Table, Column, PrimaryKey, HasMany, ForeignKey, BelongsTo, IsUUID } from "sequelize-typescript";
import UserModel from "../../../../../user/infrastructure/db/sequelize/model/user.model";
import OrderItemModel from "./orderItem.model";

@Table({ tableName: "orders", timestamps: true })
export default class OrderModel extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column
  uuid: string;

  @IsUUID(4)
  @ForeignKey(() => UserModel)
  @Column({ allowNull: false })
  userId: string;

  @BelongsTo(() => UserModel)
  user: UserModel;

  @Column({ allowNull: false })
  freight: number;

  @Column({ allowNull: false })
  discount: number;

  @Column({ allowNull: false })
  total: number;

  @HasMany(() => OrderItemModel)
  items: OrderItemModel[];
}
