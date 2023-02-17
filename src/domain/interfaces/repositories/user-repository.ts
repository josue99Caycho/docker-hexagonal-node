import { UserModelResponse, UserModelRequest } from "../../model/user.model" 

export interface UserRepository {
  getUsers(): Promise<UserModelResponse[]>
  getUserByEmail(email: string): Promise<UserModelResponse[]>
  createUser(body: UserModelRequest): void
}