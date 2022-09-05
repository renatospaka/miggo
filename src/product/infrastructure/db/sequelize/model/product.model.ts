import { Model, Table, PrimaryKey, Column } from "sequelize-typescript";

@Table({
  tableName: "products",
  timestamps: true,
})
export default class ProductModel extends Model {
  @PrimaryKey
  @Column
  declare uuid: string;

  @Column({ allowNull: false })
  declare omieCode: string;

  @Column({ allowNull: false })
  declare name: string;

  @Column({ allowNull: false })
  declare price: number;
}
