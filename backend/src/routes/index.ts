import { Router } from 'express';
import { UserController } from '../controllers/UserController'

const routes = Router();
const userController = new UserController();

routes.post('/users', userController.create)
routes.get('/users', userController.getAll);
routes.get('/users/:id', userController.getById);
routes.put('/users', userController.edit);
routes.delete('/users/:id', userController.delete);

export { routes }
