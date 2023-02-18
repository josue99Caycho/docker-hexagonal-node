import server from './server';

import { MongoClient } from 'mongodb'
import { MongoDatabaseWrapper } from './data/interfaces/data-sources/mongo-database-wrapper';
import { MongoDBUserDataSource } from './data/data-sources/mongo/mongo-user-data-source';
import RouterUser from './presentation/routers/user-router';
import { GetAllUsers } from './domain/use-cases/user/get-all-users';
import { CreateUser } from './domain/use-cases/user/create-user';
import { UserRepositoryImpl } from './domain/repositories/user-repository';

async function getMongoDS() {

  const client: MongoClient = new MongoClient("mongodb://mongodb:27017/users");
  await client.connect();

  const db = client.db("USER_DB");

  const userDatabase: MongoDatabaseWrapper = {
    find: (query) => db.collection("users").find(query).toArray(),
    insertOne: (body) => db.collection("users").insertOne(body),
  }

  return new MongoDBUserDataSource(userDatabase);

}

(async () => {

  const PORT = 5070;
  const dataSource = await getMongoDS();

  const userMiddleware = 
  RouterUser(
    new GetAllUsers(new UserRepositoryImpl(dataSource)),
    new CreateUser(new UserRepositoryImpl(dataSource)),
  )

  server.use('/user', userMiddleware)
  server.listen(PORT, () => console.log(`Corriendo server en http://localhost:${PORT}`))

})();