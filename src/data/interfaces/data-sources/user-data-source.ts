import { UserModelRequest, UserModelResponse } from '../../../domain/model/user.model';

export interface UserDataSource {
  create(user: UserModelRequest): void;
  getAll(query: object): Promise<UserModelResponse[]>;
  update(user: UserModelRequest): void;
  delete(userId: string): void;
}