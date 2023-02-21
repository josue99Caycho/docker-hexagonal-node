import express from 'express'
import { Request, Response } from 'express'

import { GetAllUsersUseCase } from '../../domain/interfaces/use-cases/user/get-all-users';
import { CreateUserUserCase } from '../../domain/interfaces/use-cases/user/create-user';
import { UpdateUserUseCase } from '../../domain/interfaces/use-cases/user/update-user';


export default function RouterUser (
  getAllUsers: GetAllUsersUseCase,
  createUser: CreateUserUserCase,
  updateUser: UpdateUserUseCase
) {

  const router = express.Router()

  router.get('/', async (req: Request, res: Response) => {

    try {

      const { email } = req.query
      const params = email ? { email } : {}

      const users = await getAllUsers.execute({ ...params });

      res.send({ data: users, status: 200, error: null });

    } catch (error) {
      res.status(500).send({ message: "Error fetching data" })
    }

  });

  router.post('/',  async (req: Request, res: Response) => {

    try {

      await createUser.execute(req.body)

      res.send({ data: 'Saved', status: 200, error: null });

    } catch (error) {
      res.status(500).send({ message: "Error saving data" })
    }

  })

  router.put('/', async (req: Request, res: Response) => {
    try {

      await updateUser.execute(req.body)

      res.send({ data: 'Updated', status: 200, error: null });

    } catch (error) {
      res.status(500).send({ message: "Error updating data" })
    }
  })

  return router

}