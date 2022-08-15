import { AppDataSource } from "./data-source"
import { User } from "./entity/User";
import express = require("express");
import { routes } from "./routes";
import cors = require('cors')

AppDataSource.initialize().then(async () => {
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
