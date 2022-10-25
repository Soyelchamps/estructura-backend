import Item from "../models/Item.js";

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
    const item = await Item.get(req.body);
    return res.json({
      msg: "Estos son todos los items",
      item,
    });
  } catch (error) {
    //Que hacer con ese error
    return res.status(400).json({
      msg: "Error al leer los el item",
      error,
    });
  }
};

const update = () => {};

const remove = () => {};

export { create, read, update, remove };
