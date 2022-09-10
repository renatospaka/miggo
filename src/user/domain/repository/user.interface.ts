import RepositoryInterface from "../../../@shared/domain/repository/repository.interface";
import User from "../entity/user";

export default interface UserRepositoryInterface 
  extends RepositoryInterface<User>{}
