import { Request, Response } from 'express';
import { logger } from '../utils/wintons';
import { User } from '../entity/User';
import { AppDataSource } from "../data-source"
import {UserService} from "../services/UserService";

class UserController {

    constructor() {
    }


    async create(request, response: Response) {
        const userService = new UserService()
        const result = await userService.save(request.body);

        if(result instanceof Error){
            return response.status(500).send(result.message)
        }

        return response.status(204).end();
    }

    async getAll(request, response: Response) {
        const userService = new UserService()
        const result = await userService.find();
        if(result instanceof Error){
            return response.status(500).send(result.message)
        }

        return response.json(result);
    }

    async edit(request, response: Response) {
        const userService = new UserService()
        const result = await userService.update(request.body);

        if(result instanceof Error){
            return response.status(500).send(result.message)
        }

        return response.status(204).end();
    }

    async delete(request, response: Response) {
        const { id } = request.params;
        const userService = new UserService()
        const result = await userService.delete(id);

        if(result instanceof Error){
            return response.status(500).send(result.message)
        }

        return response.status(204).end();
    }
}
export { UserController }
