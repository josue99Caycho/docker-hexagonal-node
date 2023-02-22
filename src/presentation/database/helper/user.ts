import { getConnection } from "../connection"; 
import { MongoDatabaseWrapper } from '../../../data/interfaces/data-sources/mongo-database-wrapper';
import { MongoDBUserDataSource } from "../../../data/data-sources/mongo/mongo-user-data-source";

export async function userMongoDataSources() {

  const client = await getConnection();
  const db = client!.db("USER_DB");

  const userDatabase: MongoDatabaseWrapper = {
    find: (query) => db.collection("users").find(query).toArray(),
    insertOne: (body) => db.collection("users").insertOne(body),
    updateOne: (body) => db.collection("users").findOneAndUpdate({ email: body.email }, { '$set': { ...body } }),
    deleteOne: (userId) => db.collection("users").findOneAndUpdate({ id: userId }, { $set: { status: false }})
  }

  return new MongoDBUserDataSource(userDatabase);
}