import { UserModelResponse, UserModelRequest } from '../../../domain/model/user.model';

export interface MongoDatabaseWrapper {
  find(query: object): Promise<any[]>;
  findByFilterValue(value: string | number): Promise<any[]>;
  findUserById(id: string): Promise<any>;
  insertOne(user: UserModelRequest): void;
  updateOne(user: UserModelRequest): void;
  deleteOne(userId: string): void;
}