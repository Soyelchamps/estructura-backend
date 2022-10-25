import express from "express";
import * as itemController from "../controllers/itemController.js";
const router = express.Router();

/*
Todas las rutas que queremos de item
*/
//Callback
router.route("/items").post(itemController.create);
router.route("/items").get(itemController.read);

export default router;
