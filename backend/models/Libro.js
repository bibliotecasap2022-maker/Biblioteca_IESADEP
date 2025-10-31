import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";
export const Libro = sequelize.define("Libro", {
  ISBN: { type: DataTypes.STRING, allowNull: false, unique: true },
  titulo: { type: DataTypes.STRING, allowNull: false },
  autor: { type: DataTypes.STRING },
  editorial: { type: DataTypes.STRING },
  año: { type: DataTypes.INTEGER },
  sede: { type: DataTypes.STRING },
  disponibilidad: { type: DataTypes.BOOLEAN, defaultValue: true }
});