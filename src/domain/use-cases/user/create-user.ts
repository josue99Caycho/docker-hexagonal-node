import { CreateUserUserCase } from '../../interfaces/use-cases/user/create-user';
import { UserModelRequest } from '../../model/user.model';
import { UserRepository } from '../../interfaces/repositories/user-repository';

export class createUser implements CreateUserUserCase {

  userRository: UserRepository;

  constructor(userRository: UserRepository){
    this.userRository = userRository
  }

  async execute(body: UserModelRequest): Promise<void> {
    await this.userRository.createUser(body)
  }
}