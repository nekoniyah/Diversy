import { INTEGER, Model, STRING } from "sequelize";
import sequelize from "../utils/db";

const CharacterSheet = class extends Model {};
CharacterSheet.init(
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
    reference_sheet: {
      type: STRING,
    },
  },
  { sequelize }
);

await sequelize.sync();

export default CharacterSheet;
