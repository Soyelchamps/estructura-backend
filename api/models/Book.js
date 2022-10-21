import mongoose from "mongoose";
/*
+1- Schema (model)
+2.-Nombre (String)
*/

const bookSchema = new mongoose.Schema({
  title: String,
  editorial: String,
  edition: String,
  pageNumber: Number,
  isbn: String,
});

export default mongoose.model("Book", bookSchema);
