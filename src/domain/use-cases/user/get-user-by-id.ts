import { GetUserByIdUseCase } from '../../interfaces/use-cases/user/get-user-by-id';
import { UserRepository } from '../../interfaces/repositories/user-repository';
import { UserModelResponse } from '../../model/user.model';
export class GetUserById implements GetUserByIdUseCase {

  userRepository:UserRepository;

  constructor(userRepository:UserRepository){
    this.userRepository = userRepository;
  }

  execute(id: string): Promise<UserModelResponse> {
    return this.userRepository.getUserById(id)
  }
}