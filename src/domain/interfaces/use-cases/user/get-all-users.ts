import { UserModelResponse } from '../../../model/user.model';

export interface GetAllUsersUseCase {
  execute(query: object): Promise<UserModelResponse[]>;
}