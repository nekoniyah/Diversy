import { INTEGER, Model, STRING } from "sequelize";
import sequelize from "../utils/db";

const Code = class extends Model {};
Code.init(
  {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    code: {
      type: STRING,
      allowNull: false,
    },
    email: {
      type: STRING,
      allowNull: false,
    },
  },
  { sequelize }
);

await sequelize.sync();

export default Code;
