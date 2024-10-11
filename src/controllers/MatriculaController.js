const Controller = require("./Controller.js");
const MatriculaServices = require("../services/matriculaServices.js");

const matriculaServices = new MatriculaServices();

class CategoriaControle extends Controller {
  constructor() {
    super(matriculaServices);
  }
}

module.exports = CategoriaControle;
