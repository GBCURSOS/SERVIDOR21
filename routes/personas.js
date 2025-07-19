import express from "express";
import {
  listadoPersonas,
  buscarPorNombreApellido,
  buscarPorId,
  crearPersona,
  modificarPersona,
  eliminarPersona,
} from "../controllers/personasController.js";

const router = express.Router();

// Ruta para listar todas las personas
router.get("/listadoPersonas", listadoPersonas);

// Ruta para buscar persona por nombre y apellido
router.get("/buscarNombreApellido", buscarPorNombreApellido);

// Ruta para buscar persona por id
router.get("/buscarPorId/:id", buscarPorId);

// Crear persona
router.post("/crearPersona", crearPersona);

// Modificar persona
router.put("/modificarPersona/:id", modificarPersona);

// Eliminar persona
router.delete("/eliminarPersona/:id", eliminarPersona);

export default router;
