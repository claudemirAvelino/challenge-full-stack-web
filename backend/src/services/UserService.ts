import {AppDataSource} from "../data-source";
import {User} from "../entity/User";

export class UserService {
    async save(params) {
        try {
            const { name, email, ra, cpf } = params;
            const user = new User()

            user.name = name
            user.email = email
            user.ra = ra
            user.cpf = cpf

            await AppDataSource.manager.save(user)

            return user;
        } catch (error) {
            return new Error('server error' + error.message)
        }
    }

    async find(): Promise<User[] | Error> {
        try {
            const userRepository = AppDataSource.getRepository(User)
            return await userRepository.find();
        }catch (error) {
            return new Error('server error' + error.message)
        }
    }

    async findById(id): Promise<User | Error> {
        try {
            const userRepository = AppDataSource.getRepository(User)
            return await userRepository.findOneBy({id});
        }catch (error) {
            return new Error('server error' + error.message)
        }
    }

    async update(params) {

        const { name, email, ra, cpf, id } = params;
        try {
            const userRepository = AppDataSource.getRepository(User)

            const user: User = await userRepository.findOneBy({id})

            user.name = name
            user.email = email
            user.ra = ra
            user.cpf = cpf
            await userRepository.save(user);
        } catch (error) {
            return new Error('server error' + error.message)
        }
    }

    async delete(id) {
        try {
            const userRepository = AppDataSource.getRepository(User)
            if(!(await userRepository.findOneBy({id}))){
                return new Error("User does not exists!")
            }
            await userRepository.delete(Number(id));
        } catch (error) {
            return new Error('server error' + error.message)
        }
    }
}
