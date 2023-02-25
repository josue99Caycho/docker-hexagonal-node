import { UserModelResponse } from '../../../model/user.model';

export interface GetUserByValueUseaCase {
  execute(value: string | number | any): Promise<UserModelResponse[]>;
}