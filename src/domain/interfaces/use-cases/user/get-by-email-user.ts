import { UserModelResponse } from '../../../model/user.model';
export interface GetUserByEmailUseCase {
  execute(email: string): Promise<UserModelResponse[]>
}