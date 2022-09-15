import { Sequelize } from "sequelize-typescript";
import User from "../../../domain/entity/user";
import UserRepositoryInterface from "../../../domain/repository/user.interface";
import UserModel from "../../db/sequelize/model/user.model";

export default class UserRepository implements UserRepositoryInterface {
  // constructor(readonly sequelize: Sequelize) {}

  async find(id: string): Promise<User> {
    const userModel = await UserModel.findOne({ where: { uuid: id } });
    return new User(
      userModel.id,
      userModel.name,
      userModel.email,
      userModel.omieUser
    );
  }

  async findAll(): Promise<User> {
    // const usersModel = await UserModel.findAll();
    // return new User(
    //   // userModel.id,
    //   // userModel.name,
    //   // userModel.email,
    //   // userModel.omieUser
    // );
    throw new Error("Implement me");
  }

  async create(entity: User): Promise<void> {
    const userModel = new UserModel;
    await UserModel.create({
      id: entity.id,
      name: entity.name,
      email: entity.email,
      omieUser: entity.omieUser
    });
  }
}
