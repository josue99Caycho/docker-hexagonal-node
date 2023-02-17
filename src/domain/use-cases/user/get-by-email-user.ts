import { GetUserByEmailUseCase } from '../../interfaces/use-cases/user/get-by-email-user';
import { UserModelResponse } from '../../model/user.model';
import { UserRepository } from '../../interfaces/repositories/user-repository';

export class GetUserByEmail implements GetUserByEmailUseCase {

  userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute(email: string): Promise<UserModelResponse[]> {
    return await this.userRepository.getUserByEmail(email);
  }
}