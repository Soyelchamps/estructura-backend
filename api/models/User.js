import mongoose from "mongoose";

/**
 * 1.- Schema (molde) ✅
 * 2.- Nombre (String)
 */

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

export default mongoose.model("User", userSchema);
