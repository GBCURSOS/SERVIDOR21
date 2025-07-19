import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import conectarDB from "./db.js";
import personasSeed from "./models/personasSeed.js";
import Persona from "./models/personas.js";
import personasRouter from "./routes/personas.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const PORT = process.env.PORT || 4100;

conectarDB().then(async () => {
  // Insertar las 20 personas solo si la colección está vacía
  const count = await Persona.countDocuments();
  if (count === 0) {
    await Persona.insertMany(personasSeed);
    console.log("20 personas insertadas en MongoDB");
  }

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

app.use("/api/personas", personasRouter);

app.get("/", (req, res) => {
  res.json({ message: `¡Prueba de servidor en el ${PORT}!` });
});


// Para hombres: https://randomuser.me/api/portraits/men/{n}.jpg
// Para mujeres: https://randomuser.me/api/portraits/women/{n}.jpg