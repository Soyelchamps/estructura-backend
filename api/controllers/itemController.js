import Item from "../models/Item.js";
import Ticket from "../models/Ticket.js";

const create = async (req, res) => {
  try {
    const item = await Item.create(req.body);
    return res.json({
      msg: "Item creado satisfactoriamente",
      item,
    });
  } catch (error) {
    //Que hacer con ese error
    return res.status(500).json({
      msg: "Error al crear el item",
      error,
    });
  }
};

const read = async (req, res) => {
  try {
    const items = await Item.find(req.query);
    return res.json({
      msg: "Estos son todos los items",
      items,
    });
  } catch (error) {
    //Que hacer con ese error
    return res.status(500).json({
      msg: "Error al leer los el item",
      error,
    });
  }
};

const readByid = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Item.findById(id);
    return res.json({
      msg: "Este es el item",
      item,
    });
  } catch (error) {
    //Que hacer con ese error
    return res.status(500).json({
      msg: "Error al leer los el item",
      error,
    });
  }
};

const update = async (req, res) => {
  const { id } = req.params;

  try {
    const item = await Item.findByIdAndUpdate(id, req.body, { new: true });
    return res.json({
      msg: "Item modificado ",
      item,
    });
  } catch (error) {
    //Que hacer con ese error
    return res.status(500).json({
      msg: "Error al actualizar el item",
      error,
    });
  }
};

const remove = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Item.findByIdAndDelete(id);
    return res.json({
      msg: "item borrado",
    });
  } catch (error) {
    return res.status(500).json({
      msg: "No se pudo borrar",
    });
  }
};

const calculateById = async (req, res) => {
  try {
    let subTotal; // suma de los valores de los items
    let tax; //sutotal .16
    let total; // subtotal + tax
    const { id } = req.params;
    const ticket = await Ticket.findById(id).populate("items");

    subTotal = ticket.items.reduce(
      (anterior, itemActual) => anterior + itemActual.price,
      0
    );
    tax = subTotal * 0.16;
    total = tax + subtotal;

    const update = await Ticket.findByIdAndUpdate(
      id,
      {
        subtotal,
        total,
        tax,
      },
      { new: true }
    ).populate("items");
    return res.json({
      msg: "item calculado correctamente.",
    });
  } catch (error) {
    return res.status(500).json({
      msg: "error al calcular el ticket",
      error,
    });
  }
};

export { create, read, readByid, update, remove, calculateById };
