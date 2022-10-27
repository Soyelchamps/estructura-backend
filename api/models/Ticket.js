import mongoose from "mongoose";

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
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

export default mongoose.model("Ticket", ticketSchema);
