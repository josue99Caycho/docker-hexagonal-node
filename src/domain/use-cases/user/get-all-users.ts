import { GetAllUsersUseCase } from '../../interfaces/use-cases/user/get-all-users';
import { UserModelResponse } from '../../model/user.model';
import { UserRepository } from '../../interfaces/repositories/user-repository';


export class GetAllUsers implements GetAllUsersUseCase {

  userRepository: UserRepository

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  async execute(): Promise<UserModelResponse[]> {
    return await this.userRepository.getUsers()
  }
}