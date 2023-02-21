import { UpdateUserUseCase } from '../../interfaces/use-cases/user/update-user';
import { UserModelRequest } from '../../model/user.model';
import { UserRepository } from '../../interfaces/repositories/user-repository';

export class UpdateUser implements UpdateUserUseCase {

  userRository: UserRepository;

  constructor(userRository: UserRepository){
    this.userRository = userRository
  }

  async execute(body: UserModelRequest) {
    await this.userRository.updateUser(body)
  }
}