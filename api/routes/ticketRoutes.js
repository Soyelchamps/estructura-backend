import express from "express";
import * as ticketController from "../controllers/ticketController.js";
const router = express.Router();

/*
Todas las rutas que queremos de item
*/
//Callback
router
  .route("/tickets")
  .get(ticketController.read)
  .post(ticketController.create);
router
  .route("/tickets/:id")
  .get(ticketController.readByid)
  .put(ticketController.update)
  .delete(ticketController.remove);
export default router;
