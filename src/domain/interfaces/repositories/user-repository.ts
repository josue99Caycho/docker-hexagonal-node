import { UserModelResponse, UserModelRequest } from "../../model/user.model" 

export interface UserRepository {
  getUsers(query: object): Promise<UserModelResponse[]>
  createUser(body: UserModelRequest): void
  updateUser(body: UserModelRequest): void
}