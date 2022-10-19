import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
//console.log(process.env);

mongoose.connect(process.env.DB_URI, () => {
  console.log("Conexion a base de datos satisfactoria");
});
