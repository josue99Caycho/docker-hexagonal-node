import { UserModelResponse, UserModelRequest } from '../../../domain/model/user.model';

export interface MongoDatabaseWrapper {
  find(query: object): Promise<any[]>;
  insertOne(user: UserModelRequest): void;
  updateOne(user: UserModelRequest): void;
}