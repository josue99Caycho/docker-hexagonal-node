import { UserModelRequest } from '../../../model/user.model';

export interface CreateUserUserCase {
  execute(body: UserModelRequest): Promise<void>
}