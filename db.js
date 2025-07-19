import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.MONGODB_URI;

export const conectarDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Conexión exitosa a MongoDB Atlas");
  } catch (err) {
    console.error("Error de conexión a MongoDB Atlas:", err);
  }
};

export default conectarDB;
