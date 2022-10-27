import mongoose from "mongoose";
import config from "./index.js";
const db = mongoose.connection;
db.on("connecting", () => {
  console.log("Conectado a la base de datos");
});
db.on("connected", () => {
  console.log("Se ha conectado a la base de datos ");
});

db.on("error", () => {
  console.log("Error al conetarse a la base de datos ");
});

export default () => {
  mongoose.connect(config.database.uri);
};
