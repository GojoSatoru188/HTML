import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import experienciaRoutes from "./routes/experienciaRoutes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/experiencias", experienciaRoutes);

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ Conectado a MongoDB"))
  .catch(err => console.error("❌ Error al conectar MongoDB:", err));

app.listen(process.env.PORT, () => console.log(`🚀 Servidor corriendo en http://localhost:${process.env.PORT}`));