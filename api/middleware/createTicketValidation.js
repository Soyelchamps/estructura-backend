import joi from "joi";
const createTicketValidation = async (req, res, next) => {
  /**
   * 1.- crear schema
   * 2.- validad req.body con el schema
   * si todo sale bien -> next ()
   * si no res.status(400)
   * 3.- registrar middleware
   */
  const ticketSchema = joi.object({
    subtotal: joi.number(),
    TAX: joi.number(),
    total: joi.number(),
  });
};
export { createTicketValidation };
