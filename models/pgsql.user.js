import { DataTypes, Model } from "sequelize";
import sequelize from "../../../config/db";

class Family extends Model {}

Family.init(
  {
    familyName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    creatorId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    paranoid: true,
    modelName: "family",
  }
);

export default Family;
