import Persona from "../models/personas.js";

// Controlador para listar todas las personas
export async function listadoPersonas(req, res) {
  try {
    const personas = await Persona.find();
    res.json(personas);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las personas" });
  }
}

// Controlador para buscar persona por nombre y apellido
export async function buscarPorNombreApellido(req, res) {
  try {
    const { nombre, apellido } = req.query;
    if (!nombre || !apellido) {
      return res.status(400).json({
        error: "Debes proporcionar nombre y apellido en el query string",
      });
    }
    const persona = await Persona.findOne({ nombre, apellido });
    if (!persona) {
      return res.status(404).json({ error: "Persona no encontrada" });
    }
    res.json(persona);
  } catch (error) {
    res.status(500).json({ error: "Error al buscar la persona" });
  }
}

// Controlador para buscar persona por id
export async function buscarPorId(req, res) {
  try {
    const { id } = req.params;
    const persona = await Persona.findById(id);
    if (!persona) {
      return res.status(404).json({ error: "Persona no encontrada" });
    }
    res.json(persona);
  } catch (error) {
    res.status(500).json({ error: "Error al buscar la persona por id" });
  }
}

// Crear persona
export async function crearPersona(req, res) {
  try {
    const { nombre, apellido, edad, foto } = req.body;
    const persona = new Persona({ nombre, apellido, edad, foto });
    await persona.save();
    res.status(201).json(persona);
  } catch (error) {
    res.status(400).json({ error: "Error al crear persona" });
  }
}

// Modificar persona
export async function modificarPersona(req, res) {
  try {
    const { id } = req.params;
    const { nombre, apellido, edad, foto } = req.body;
    const persona = await Persona.findByIdAndUpdate(
      id,
      { nombre, apellido, edad, foto },
      { new: true, runValidators: true }
    );
    if (!persona)
      return res.status(404).json({ error: "Persona no encontrada" });
    res.json(persona);
  } catch (error) {
    res.status(400).json({ error: "Error al modificar persona" });
  }
}

// Eliminar persona
export async function eliminarPersona(req, res) {
  try {
    const { id } = req.params;
    const persona = await Persona.findByIdAndDelete(id);
    if (!persona)
      return res.status(404).json({ error: "Persona no encontrada" });
    res.json({ mensaje: "Persona eliminada" });
  } catch (error) {
    res.status(400).json({ error: "Error al eliminar persona" });
  }
}
