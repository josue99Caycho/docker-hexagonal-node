import { UserModelResponse } from '../../../model/user.model';

export interface GetAllUsersUseCase {
  execute(): Promise<UserModelResponse[]>;
}