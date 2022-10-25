import mongoose from "mongoose";
import config from "./index.js";
const db = mongoose.connection;
db.on("conecting", () => {
  console.log("Conectado a la base de datos");
});
db.on("conected", () => {
  console.log("Se ha conectado a la base de datos ");
});

db.on("error", () => {
  console.log("Error al conetarse a la base de datos ");
});

export default () => {
  mongoose.connect(config.database.uri);
};
