import { DataTypes, Sequelize } from "sequelize";
import UserModel from "../infrastructure/db/sequelize/model/user.model";
// import { initUserModel } from "../infrastructure/db/sequelize/model/model";

export class UserController {

  // private userModel: ReturnType<typeof initUserModel>

  constructor () {}
  //   this.userModel = initUserModel(sequelize)
  // }

  async getAll() {
    // return this._userModel.findAll()
    throw new Error("Implement me");
    
  }

  async getbyId(uuid: { type: typeof DataTypes.UUID }) {
    // return this._userModel.findByPk(uuid);
    throw new Error("Implement me");
  }

}