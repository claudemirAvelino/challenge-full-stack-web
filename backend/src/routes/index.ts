import { Router } from 'express';
import { UserController } from '../controllers/UserController'

const routes = Router();
const userController = new UserController();

routes.post('/user', userController.create)
routes.get('/user', userController.getAll);
routes.put('/user', userController.edit);
routes.delete('/user/:id', userController.delete);

export { routes }
