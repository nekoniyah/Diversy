import { Sequelize } from "sequelize";

const sequelize = new Sequelize({ dialect: "sqlite", storage: ".db" });

export function exclude(obj: any, keys: string[]) {
  let o: any = {};

  for (let key in obj) {
    if (!keys.includes(key)) o[key] = obj[key];
  }

  return o;
}

export default sequelize;
