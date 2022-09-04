import { Model, Sequelize, DataTypes } from 'sequelize'

interface IProduct{
  uuid: string;
  name: string;
  omieCode: string;
  price: number;
}

export class ProductSequelize extends Model<IProduct> implements IProduct {
  uuid!: string;
  name!: string;
  omieCode: string;
  price: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt?: Date;
}

export function initProductModel(sequelize: Sequelize) {

  let ProductModel: typeof ProductSequelize;

  ProductModel = ProductSequelize.init({
    uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    omieCode: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {
      sequelize,
      tableName: 'products',
      modelName: 'product'
    })

  return ProductModel
}