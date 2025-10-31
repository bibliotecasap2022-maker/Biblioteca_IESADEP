import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";
export const Usuario = sequelize.define("Usuario", {
  nombre: { type: DataTypes.STRING, allowNull: false },
  apellido: { type: DataTypes.STRING, allowNull: false },
  tipo_documento: { type: DataTypes.STRING },
  documento: { type: DataTypes.STRING, unique: true },
  sede: { type: DataTypes.STRING },
  tipo_usuario: { type: DataTypes.STRING },
  grupo: { type: DataTypes.STRING, allowNull: true }
});