import express from 'express'
import { Request, Response } from 'express'

import { GetAllUsersUseCase } from '../../domain/interfaces/use-cases/user/get-all-users';
import { CreateUserUserCase } from '../../domain/interfaces/use-cases/user/create-user';


export default function RouterUser (
  getAllUsers: GetAllUsersUseCase,
  createUser: CreateUserUserCase
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

  return router

}