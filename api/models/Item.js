import mongoose from "mongoose";

/**
 * 1.- Schema (molde) ✅
 * 2.- Nombre (String)
 */

const ItemSchema = new mongoose.Schema({
  name: String,
  price: String,
  stock: Number,
});

export default mongoose.model("Item", ItemSchema);
