import { UserModelResponse, UserModelRequest } from "../../model/user.model" 

export interface UserRepository {
  getUsers(query: object): Promise<UserModelResponse[]>;
  getUserByValue(value: string | number): Promise<UserModelResponse[]>;
  createUser(body: UserModelRequest): void;
  updateUser(body: UserModelRequest): void;
  deleteUser(userId: string): void;
}