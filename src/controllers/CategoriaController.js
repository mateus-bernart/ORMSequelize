const Controller = require("./Controller.js");
const CategoriaServices = require("../services/categoriaServices.js");

const categoriaServices = new CategoriaServices();

class CategoriaControle extends Controller {
  constructor() {
    super(categoriaServices);
  }
}

module.exports = CategoriaControle;
