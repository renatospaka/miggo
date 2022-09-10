import { Column, HasMany, IsUUID, Model, PrimaryKey, Table } from "sequelize-typescript";
import OrderModel from "../../../../../order/infrastructure/db/sequelize/model/order.model";

@Table({ tableName: "users", timestamps: true })
export default class UserModel extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column
  uuid: string;

  @Column({ allowNull: false })
  name: string;
  
  @Column({ allowNull: false })
  email: string;

  @Column({ allowNull: false })
  omieUser: string;

  @HasMany(() => OrderModel)
  orders: OrderModel[];
}
