import { AppDataSource } from "./data-source"
import { User } from "./entity/User";
import express = require("express");
import { routes } from "./routes";
import cors = require('cors')

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const user = new User()
    /*user.name = "Timber"
    user.email = "saw@gmail.com"
    user.ra = '25'
    user.cpf = '000.000.000-00'*/
    //await AppDataSource.manager.save(user)
    //console.log("Saved a new user with id: " + user.id)

    //console.log("Loading users from the database...")
    //const users = await AppDataSource.manager.find(User)
    //console.log("Loaded users: ", users)


    const app = express();

    app.use(
        express.json(),
        cors(),
        express.urlencoded({ extended: true }),
        routes
    )

    app.listen(3333, () => {
        console.log('Server is running on port http://localhost:3333')
    });

}).catch(error => console.log(error))
