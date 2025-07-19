import mongoose from "mongoose";

const personaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  edad: { type: Number, required: true },
  foto: String,
});

const Persona = mongoose.model("Persona", personaSchema);

export default Persona;
