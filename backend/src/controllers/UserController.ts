import { Request, Response } from 'express';
import { logger } from '../utils/wintons';

import { User } from '../entity/User';
import { AppDataSource } from "../data-source"

class UserController {

    constructor() {
        
    }


    async create(request, response: Response) {
        try {
            const { name, email, ra, cpf } = request.body;
            const user = new User()

            user.name = name
            user.email = email
            user.ra = ra
            user.cpf = cpf
            await AppDataSource.manager.save(user)
            console.log("Saved a new user with id: " + user.id)


            return response.json(user)

        } catch (error) {
            logger.error('UserController: create  ERROR: ', error)
            return response.status(500).send('server error')
        }
    }


}
export { UserController }
