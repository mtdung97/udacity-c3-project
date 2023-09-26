import {Sequelize} from "sequelize-typescript";
import {config} from "./config/config";

const configSequelize: any = config;

export const sequelize = new Sequelize({
  username: configSequelize.username,
  password: configSequelize.password,
  database: configSequelize.database,
  host: configSequelize.host,
  dialect: configSequelize.dialect,
  storage: ":memory:",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});
