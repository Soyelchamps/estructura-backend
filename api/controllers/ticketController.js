import Ticket from "../models/Ticket.js";

const create = async (req, res) => {
  try {
    const ticket = await Ticket.create(req.body);
    return res.json({
      msg: "Se ha creado correctamente",
      ticket,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al crear el ticket",
      error,
    });
  }
};
const read = async (req, res) => {
  try {
    const ticket = await Ticket.find().populate("items");
    if (!ticket) {
      return res.status(404).json({
        msg: "ticket no encontrado",
      });
    }
    return res.json({
      msg: "ticket encontrado",
      ticket,
    });
  } catch (error) {}
};

const readByid = async (req, res) => {
  const { id } = req.params;
  try {
    const ticket = await Ticket.findById(id).populate("items");

    if (!ticket) {
      return res.status(404).json({
        msg: "ticket no encontrado",
      });
    }
    return res.json({
      msg: "Ticket encontrado",
      ticket,
    });
  } catch (error) {
    return res.json({
      msg: "Error al encontrar ticket",
      error,
    });
  }
};
const update = async (req, res) => {
  const { id } = req.params;
  try {
    const ticket = await Ticket.findByIdAndUpdate(id, req.body, { new: true });
    return res.json({
      msg: "Ticket actualizado",
      ticket,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al actulizar",
      error,
    });
  }
};

const remove = async () => {};

export { create, read, readByid, update, remove };
