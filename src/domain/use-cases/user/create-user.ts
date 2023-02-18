import { CreateUserUserCase } from '../../interfaces/use-cases/user/create-user';
import { UserModelRequest } from '../../model/user.model';
import { UserRepository } from '../../interfaces/repositories/user-repository';

export class CreateUser implements CreateUserUserCase {

  userRository: UserRepository;

  constructor(userRository: UserRepository){
    this.userRository = userRository
  }

  async execute(body: UserModelRequest) {
    await this.userRository.createUser(body)
  }
}