import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("test_expressJS", "root", "28091981", {
    dialect: "mysql",
    port: 3306,
    host: "localhost"
});

sequelize.authenticate()
    .then(() => console.log('Connected to MySQL database'))
    .catch(err => console.log(err))