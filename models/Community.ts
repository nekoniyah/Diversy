import { INTEGER, Model, STRING } from "sequelize";
import sequelize from "../utils/db";

const Community = class extends Model {};
Community.init(
  {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    ownerId: {
      type: INTEGER,
      allowNull: false,
    },
    name: {
      type: STRING,
      allowNull: false,
    },
    description: {
      type: STRING,
    },
    avatar: {
      type: STRING,
    },
    banner: {
      type: STRING,
    },
    vanityUrl: {
      type: STRING,
      unique: true,
    },
  },
  { sequelize }
);

await sequelize.sync();

export default Community;
