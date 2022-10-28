import User from "../models/User.js";
const create = async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.json({
      msg: "Se ha creado correctamente",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al crear el usuario",
      error,
    });
  }
};
const read = async (req, res) => {
  try {
    const users = await User.find();
    return res.json({
      msg: "Estos son los usuarios",
      users,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al crear el usuario",
      error,
    });
  }
};

const readByid = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    return res.json({
      msg: "Este es el usuario ",
      user,
    });
  } catch (error) {
    //Que hacer con ese error
    return res.status(500).json({
      msg: "Error al leer el usuario ",
      error,
    });
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    return res.json({
      msg: "usuario modificado ",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al actualizar el usuario",
      error,
    });
  }
};

const remove = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndDelete(id);
    return res.json({
      msg: "usuario eliminado",
    });
  } catch (error) {
    //Que hacer con ese error
    return res.status(500).json({
      msg: "Error al eliminar el usuario ",
      error,
    });
  }
};

export { create, read, readByid, update, remove };
