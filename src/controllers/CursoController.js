const Controller = require("./Controller.js");
const CursoServices = require("../services/cursoServices.js");

const cursoServices = new CursoServices();

class CategoriaControle extends Controller {
  constructor() {
    super(cursoServices);
  }
}

module.exports = CategoriaControle;
