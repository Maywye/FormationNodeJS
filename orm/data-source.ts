import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "formation-node",
    synchronize: true,
    logging: true,
    entities: ["orm/entity/**/*.ts"]
});