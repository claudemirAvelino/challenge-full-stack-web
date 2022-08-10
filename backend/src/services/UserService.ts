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

    async find() {
        try {
            const userRepository = AppDataSource.getRepository(User)
            const users: User[] = await userRepository.find();
            return users;
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
            console.log('id', id)
            const userRepository = AppDataSource.getRepository(User)
            if(!(await userRepository.findOneBy({id}))){
                console.log('entrou no if')
                return new Error("User does not exists!")
            }
            await userRepository.delete(Number(id));
            console.log('usuário deletado')
        } catch (error) {
            return new Error('server error' + error.message)
        }
    }
}