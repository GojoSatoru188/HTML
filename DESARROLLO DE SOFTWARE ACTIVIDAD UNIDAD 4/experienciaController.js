import Experiencia from "./experiencia.js";

export const obtenerExperiencias = async (req, res) => {
  const experiencias = await Experiencia.find();
  res.json(experiencias);
};

export const crearExperiencia = async (req, res) => {
  const nuevaExp = new Experiencia(req.body);
  await nuevaExp.save();
  res.json({ message: "Experiencia creada", data: nuevaExp });
};

export const actualizarExperiencia = async (req, res) => {
  const { id } = req.params;
  const expActualizada = await Experiencia.findByIdAndUpdate(id, req.body, { new: true });
  res.json({ message: "Experiencia actualizada", data: expActualizada });
};

export const eliminarExperiencia = async (req, res) => {
  const { id } = req.params;
  await Experiencia.findByIdAndDelete(id);
  res.json({ message: "Experiencia eliminada" });
};