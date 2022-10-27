const middlewarePrueba = (req, res, next) => {
  console.log("Entro en el middleware");
  next();
};
export { middlewarePrueba };
