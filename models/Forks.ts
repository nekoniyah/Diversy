import { INTEGER, Model, STRING } from "sequelize";
import sequelize from "../utils/db";

const Forks = class extends Model {};

Forks.init(
  {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    url: {
      type: STRING,
      allowNull: false,
    },
  },
  { sequelize }
);

await sequelize.sync();
export default Forks;
