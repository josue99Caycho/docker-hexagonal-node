import server from './server';

import RouterUser from './presentation/routers/user-router';

import { GetAllUsers } from './domain/use-cases/user/get-all-users';
import { CreateUser } from './domain/use-cases/user/create-user';
import { UpdateUser } from './domain/use-cases/user/update-user';
import { DeleteUser } from './domain/use-cases/user/delete-user';

import { UserRepositoryImpl } from './domain/repositories/user-repository';

import { userMongoDataSources } from './presentation/database/helper/user';
import { GetAllUserByValue } from './domain/use-cases/user/get-all-user-by-value';

(async () => {

  const PORT = 5070;
  const dataSource = await userMongoDataSources();

  const userMiddleware = 
  RouterUser(
    new GetAllUsers(new UserRepositoryImpl(dataSource)),
    new GetAllUserByValue(new UserRepositoryImpl(dataSource)),
    new CreateUser(new UserRepositoryImpl(dataSource)),
    new UpdateUser(new UserRepositoryImpl(dataSource)),
    new DeleteUser(new UserRepositoryImpl(dataSource))
  )

  server.use('/user', userMiddleware)
  server.listen(PORT, () => console.log(`Corriendo server en http://localhost:${PORT}`))

})();