import { DeleteUserUserCase } from '../../interfaces/use-cases/user/detele-user';
import { UserRepository } from '../../interfaces/repositories/user-repository';

export class DeleteUser implements DeleteUserUserCase {

  userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute(userId: string) {
    await this.userRepository.deleteUser(userId);
  }
}