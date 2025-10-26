import mongoose from "mongoose";

const experienciaSchema = new mongoose.Schema({
  empresa: { type: String, required: true },
  cargo: { type: String, required: true },
  descripcion: { type: String },
  fechaInicio: { type: String, required: true },
  fechaFin: { type: String }
});

export default mongoose.model("Experiencia", experienciaSchema);