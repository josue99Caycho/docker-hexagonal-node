import { UserModelRequest } from '../../../model/user.model';

export interface UpdateUserUseCase {
  execute(body: UserModelRequest): Promise<void>
}