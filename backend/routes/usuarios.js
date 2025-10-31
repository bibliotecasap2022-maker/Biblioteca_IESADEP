import express from "express";
import { Usuario } from "../models/Usuario.js";
const router = express.Router();
router.get("/", async (_, res) => res.json(await Usuario.findAll()));
router.post("/", async (req, res) => res.json(await Usuario.create(req.body)));
router.put("/:id", async (req, res) => {
  await Usuario.update(req.body, { where: { id: req.params.id } });
  res.json({ message: "Actualizado" });
});
router.delete("/:id", async (req, res) => {
  await Usuario.destroy({ where: { id: req.params.id } });
  res.json({ message: "Eliminado" });
});
export default router;