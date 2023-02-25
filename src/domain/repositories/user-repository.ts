import { UserDataSource } from '../../data/interfaces/data-sources/user-data-source';
import { UserRepository } from '../interfaces/repositories/user-repository';
import { UserModelRequest, UserModelResponse } from '../model/user.model';


export class UserRepositoryImpl implements UserRepository {
  
  userDataSource: UserDataSource;

  constructor(userDataSource: UserDataSource) {
    this.userDataSource = userDataSource;
  }

  async getUsers(query: object): Promise<UserModelResponse[]> {
    return await this.userDataSource.getAll(query);
  }

  async getUserByValue(value: string | number): Promise<UserModelResponse[]> {
    return await this.userDataSource.getAllByValue(value);
  }

  async getUserById(id: string): Promise<UserModelResponse> {
    return await this.userDataSource.getById(id)
  }

  async createUser(body: UserModelRequest) {
    await this.userDataSource.create(body)
  }

  async updateUser(body: UserModelRequest) {
    await this.userDataSource.update(body)
  }

  async deleteUser(userId: string) {
    await this.userDataSource.delete(userId);
  }

}