import joi from "joi";
const createItemValidation = (req, res, next) => {
  const itemSchema = joi.object({
    name: joi.string().required(),
    price: joi.number().required(),
    stock: joi.number().requiered(),
  });
  try {
    await itemSchema.validateAsync(req.body);
    next();
  } catch (error) {
    return res.status(400).json({
      msg: "datos invalidos",
      error,
    });
  }
};
export { createItemValidation };
