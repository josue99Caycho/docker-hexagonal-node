import { UserRepository } from '../../interfaces/repositories/user-repository';
import { GetUserByValueUseaCase } from '../../interfaces/use-cases/user/get-user-by-value';
import { UserModelResponse } from '../../model/user.model';

export class GetAllUserByValue implements GetUserByValueUseaCase {


  userRepository: UserRepository;

  constructor(userRepository: UserRepository){
    this.userRepository = userRepository;
  }

  execute(value: string | number): Promise<UserModelResponse[]> {
    return this.userRepository.getUserByValue(value)
  }
}