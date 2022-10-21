import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./api/models/User.js";
import Book from "./api/models/Book.js";

dotenv.config();

mongoose.connect(process.env.DB_URI, async () => {
  console.log("Conexión a base datos satisfactoria 💚");

  /* CRUD Básico con mongoose */
  const user = await User.create({
    address: "Dirección prueba",
    birthday: new Date(),
    contacts: ["Pedrito", "Jorge"],
    email: "corre@prueba.com",
    lastname: "Rodriguez",
    name: "Juan",
    password: "123",
    phone: "17232163",
    role: "Client",
  });
  console.log(user);

  // const users = await User.find({
  //   name: "Juan",
  // });
  // console.log(users);

  // const promiseResult = await User.updateMany(
  //   {
  //     name: "Juan",
  //     lastname: "Rodriguez",
  //   },
  //   {
  //     role: "Admin",
  //   }
  // );

  // console.log(promiseResult);

  // const result = await User.deleteOne({
  //   name: "Juan",
  // });

  // console.log(result);

  /*CRUD Book*/
  const book = await Book.create({
    title: "Los Miserables",
    editorial: "Aguilar",
    edition: "primera Edicion",
    pageNumber: 1090,
    isbn: "9384950302",
  });
  console.log(book);
  // const books = Book.find({
  //   title: "Los Miserables",
  // });
  // console.log(books);

  const updated = await Book.findByIdAndUpdate("6350aed58d502fbb7d2e060b", {
    title: "Titulo Cambiado",
  });
  console.log(updated);

  // const result = await Book.deleteOne({
  //   title: "Los Miserables",
  // });

  // console.log(result);
});
