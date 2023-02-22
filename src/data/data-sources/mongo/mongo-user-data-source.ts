import { UserModelRequest, UserModelResponse } from '../../../domain/model/user.model';
import { UserDataSource } from '../../interfaces/data-sources/user-data-source';
import { MongoDatabaseWrapper } from '../../interfaces/data-sources/mongo-database-wrapper';

export class MongoDBUserDataSource implements UserDataSource {

  //User data source === Aacciones de usuario

  // Interface / acciones de Mongodb
  db: MongoDatabaseWrapper;

  constructor(db: MongoDatabaseWrapper) {
    this.db = db;
  }

  async create(user: UserModelRequest): Promise<void> {
    await this.db.insertOne(user);
  }

  async getAll(query: object): Promise<UserModelResponse[]> {
    return await this.db.find(query);
  }

  async update(user: UserModelRequest): Promise<void> {
    return await this.db.updateOne(user)
  }

  async delete(userId: string): Promise<void> {
    await this.db.deleteOne(userId);
  }

}