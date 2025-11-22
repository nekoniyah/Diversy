import { INTEGER, Model, STRING } from "sequelize";
import sequelize from "../utils/db";

const User = class extends Model {};

User.init(
  {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    username: {
      type: STRING,
    },
    email: {
      type: STRING,
      allowNull: false,
    },
    token: {
      type: STRING,
      allowNull: false,
    },
    avatar: STRING,
  },
  { sequelize }
);

await sequelize.sync();

export default User;
