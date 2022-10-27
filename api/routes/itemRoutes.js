import express from "express";
import * as itemController from "../controllers/itemController.js";
const router = express.Router();

/*
Todas las rutas que queremos de item
*/

router.route("/items").post(itemController.create).get(itemController.read);
router
  .route("/items/:id")
  .get(itemController.readByid)
  .put(itemController.update)
  .delete(itemController.remove);

router.route("/items/:id/calculate").get(itemController.calculate);

export default router;
