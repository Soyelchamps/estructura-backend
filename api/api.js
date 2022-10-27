import express from "express";
import itemRoutes from "./routes/itemRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import ticketRoutes from "./routes/ticketRoutes.js";
import { middlewarePrueba } from "./middleware/middlewarePrueba.js";
import morgan from "morgan";

const api = express();
api.use(morgan("tiny"));

api.use(express.json());
api.get("/status", (_, res) => {
  res.json({
    msg: "API en Linea funcionando",
  });
});

api.use(middlewarePrueba);
api.use(itemRoutes);
api.use(userRoutes);
api.use(ticketRoutes);
export default api;

//GET ALL /item
//GET ID /item/id
//POST   /item
//PUT ID /item/id
//DELETE  /item/id
