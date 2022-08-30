import { Model, Sequelize, DataTypes } from 'sequelize'

interface IUser {
  uuid: string;
  name: string;
  email: string;
  omieUser: string;
}

export class UserSequelize extends Model<IUser> implements IUser {
  uuid!: string;
  name!: string;
  email: string;
  omieUser: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt?: Date;
}

export function initUserModel(sequelize: Sequelize) {

  let UserModel: typeof UserSequelize;

  UserModel = UserSequelize.init({
    uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    omieUser: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {
      sequelize,
      tableName: 'users',
      modelName: 'user'
    })

  return UserModel
}
