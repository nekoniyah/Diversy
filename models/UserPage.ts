import { INTEGER, Model, STRING } from "sequelize";
import sequelize from "../utils/db";

const UserPage = class extends Model {};

UserPage.init(
  {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    userId: {
      type: INTEGER,
      allowNull: false,
    },
    customCss: {
      type: STRING,
      allowNull: true,
    },
    bio: {
      type: STRING,
      allowNull: true,
    },
  },
  { sequelize }
);

export default UserPage;
