import mongoose from "mongoose";
import User from "./User";

/**
 * 1.- Schema (molde) ✅
 * 2.- Nombre (String)
 */

const ticketSchema = new mongoose.Schema({
  subtotal: Number,
  TAX: Number,
  total: Number,
  items: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Item",
    },
  ],
  users: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

export default mongoose.model("Ticket", ticketSchema);
