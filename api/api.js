import express from "express";
import itemRoutes from "./routes/itemRoutes.js";

const api = express();
api.use(express.json());
api.get("/status", (_, res) => {
  res.json({
    msg: "API en Linea funcionando",
  });
});

api.use(itemRoutes);

export default api;
