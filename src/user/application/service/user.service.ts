import User from "../../domain/entity/user";
import UserRepositoryInterface from "../../domain/repository/user.interface";

export default class UserService {
  constructor(readonly repo: UserRepositoryInterface) {}

  async findOne(id: string): Promise<User> {
    const user = await this.repo.find(id);
    return user;
  }

  async findAll(): Promise<User> {
    const users = await this.repo.findAll();
    return users;
  }
}
