import express from 'express'
import { Request, Response } from 'express'

import { GetAllUsersUseCase } from '../../domain/interfaces/use-cases/user/get-all-users';
import { CreateUserUserCase } from '../../domain/interfaces/use-cases/user/create-user';
import { UpdateUserUseCase } from '../../domain/interfaces/use-cases/user/update-user';
import { UserModelResponse } from '../../domain/model/user.model';

import { v4 as uuidv4 } from 'uuid';
import { DeleteUserUserCase } from '../../domain/interfaces/use-cases/user/detele-user';
import { UserMiddlewareQueryParams } from '../middleware/user';
import { GetUserByValueUseaCase } from '../../domain/interfaces/use-cases/user/get-user-by-value';
import { GetUserByIdUseCase } from '../../domain/interfaces/use-cases/user/get-user-by-id';

export default function RouterUser (
  getAllUsers: GetAllUsersUseCase,
  getAllByValue: GetUserByValueUseaCase,
  getUserById: GetUserByIdUseCase,
  createUser: CreateUserUserCase,
  updateUser: UpdateUserUseCase,
  deleteUser: DeleteUserUserCase
) {

  const router = express.Router()

  router.get('/', async (req: Request, res: Response) => {
    console.log('-------Consultando por todos los usuarios-------')
    try {

      const { email } = req.query
      const params = email ? { email } : {}

      const users = await getAllUsers.execute({ ...params, status: true });

      res.send({ data: users, status: 200, error: null });

    } catch (error) {
      res.status(500).send({ message: "Error fetching data" })
    }

  });

  router.get('/value',[UserMiddlewareQueryParams], async (req: Request, res: Response) => {
    console.log('-------Buscando usuario por valores-------')

    try {

      const { term } = req.query

      const users = await getAllByValue.execute(term)

      res.send({ data: users, status: 200, error: null });

    } catch (error) {
      res.status(500).send({ message: "Error fetching data" })
    }

  });

  router.get('/:userId', async (req: Request, res: Response) => {
    console.log('-------Consultando usuario por ID-------')

    try {

      const { userId } = req.params

      const user = await getUserById.execute(userId)

      res.send({ data: user, status: 200, error: null });

    } catch (error) {
      res.status(500).send({ message: "Error fetching data" })
    }

  });

  router.post('/',  async (req: Request, res: Response) => {
    console.log('-------Registrando usuario------')

    try {

      const { email } = req.body;
      const [ user ]: Array<UserModelResponse> = await getAllUsers.execute({ email });
      if(user) throw new Error(`Email already exists ${ user.email }`)

      const body = req.body;
      await createUser.execute({ id: uuidv4(), status: true, ...body })

      res.send({ data: 'Saved', status: 200, error: null });

    } catch (error) {
      res.status(500).send({ message: error.message || 'Error saving data' })
    }

  })

  router.put('/', async (req: Request, res: Response) => {
    console.log('-------Actualizando usuario-------')
    try {

      await updateUser.execute(req.body)

      res.send({ data: 'Updated', status: 200, error: null });

    } catch (error) {
      res.status(500).send({ message: "Error updating data" })
    }
  })

  router.delete('/:userId', async (req: Request, res: Response) => {
    console.log('-------Dando de baja usuario por ID-------')

    try {

      const userId = req.params.userId
      await deleteUser.execute(userId);

      res.send({ data: 'Deleted', status: 200, error: null });
      
    } catch (error) {
      res.status(500).send({ message: "Error delete user" })
    }
  })

  return router

}