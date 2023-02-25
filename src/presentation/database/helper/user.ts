import { getConnection } from "../connection"; 
import { MongoDatabaseWrapper } from '../../../data/interfaces/data-sources/mongo-database-wrapper';
import { MongoDBUserDataSource } from "../../../data/data-sources/mongo/mongo-user-data-source";

export async function userMongoDataSources() {

  const client = await getConnection();
  const db = client!.db("USER_DB");

  const userDatabase: MongoDatabaseWrapper = {
    find: (query) => db.collection("users").find(query).toArray(),
    findByFilterValue: (value) => db.collection("users").find({ $or: [{ name: { $regex: value, $options: 'i' } }, { email: { $regex: value, $options: 'i' } }, { dni: { $regex: value, $options: 'i' } }] }).toArray(),
    findUserById: (id: string) => db.collection("users").findOne({ id }),
    insertOne: (body) => db.collection("users").insertOne(body),
    updateOne: (body) => db.collection("users").findOneAndUpdate({ id: body.id }, { '$set': { ...body } }),
    deleteOne: (userId) => db.collection("users").findOneAndUpdate({ id: userId }, { $set: { status: false } })
  }

  return new MongoDBUserDataSource(userDatabase);
}