import express from "express";
import * as userController from "../controllers/userController.js";
const router = express.Router();

/*
Todas las rutas que queremos de item
*/
//Callback
router.route("/users").post(userController.create).get(userController.read);
router
  .route("/users/:id")
  .get(userController.readByid)
  .put(userController.update)
  .delete(userController.remove);

export default router;
