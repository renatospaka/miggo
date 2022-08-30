import { Sequelize } from "sequelize";
import { initUserModel } from "../model";

export class UserController {

  private userModel: ReturnType<typeof initUserModel>

  constructor (sequelize: Sequelize) {
    this.userModel = initUserModel(sequelize)
  }

  async getAll() {
    return this.userModel.findAll()
  }

  async getbyId(uuid: string) {
    return this.userModel.findByPk(uuid)
  }

}