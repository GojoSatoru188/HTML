import express from "express";
import {
  obtenerExperiencias,
  crearExperiencia,
  actualizarExperiencia,
  eliminarExperiencia
} from "../controllers/experienciaController.js";

const router = express.Router();

router.get("/", obtenerExperiencias);
router.post("/", crearExperiencia);
router.put("/:id", actualizarExperiencia);
router.delete("/:id", eliminarExperiencia);

export default router;