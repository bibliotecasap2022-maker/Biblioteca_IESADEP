import express from "express";
import cors from "cors";
import { sequelize } from "./backend/db.js";
import libroRoutes from "./backend/routes/libros.js";
import usuarioRoutes from "./backend/routes/usuarios.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("frontend"));

app.use("/api/libros", libroRoutes);
app.use("/api/usuarios", usuarioRoutes);

const PORT = process.env.PORT || 8080;

sequelize.sync({ alter: true }).then(() => {
  app.listen(PORT, () => console.log(`🚀 Servidor corriendo en el puerto ${PORT}`));
});