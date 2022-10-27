import express from "express";
import * as userController from "../controllers/userController.js";
import { createUserValidation } from "../middleware/createUserValidation.js";
const router = express.Router();

/*
Todas las rutas que queremos de item
*/
//Callback
router
  .route("/users")
  .post(createUserValidation, userController.create)
  .get(userController.read);
router
  .route("/users/:id")
  .get(userController.readByid)
  .put(userController.update)
  .delete(userController.remove);

export default router;
