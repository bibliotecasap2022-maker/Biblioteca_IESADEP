import express from "express";
import { Libro } from "../models/Libro.js";
const router = express.Router();
router.get("/", async (_, res) => res.json(await Libro.findAll()));
router.post("/", async (req, res) => res.json(await Libro.create(req.body)));
router.put("/:id", async (req, res) => {
  await Libro.update(req.body, { where: { id: req.params.id } });
  res.json({ message: "Actualizado" });
});
router.delete("/:id", async (req, res) => {
  await Libro.destroy({ where: { id: req.params.id } });
  res.json({ message: "Eliminado" });
});
export default router;