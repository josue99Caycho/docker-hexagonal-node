import { UserModelResponse } from '../../../model/user.model';

export interface GetUserByIdUseCase {
  execute(id: string): Promise<UserModelResponse>;
}