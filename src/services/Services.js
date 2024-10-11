const { where } = require("sequelize");
const dataSource = require("../models");

class Services {
  constructor(nomeDoModel) {
    this.model = nomeDoModel;
  }
  async pegaTodosOsRegistros() {
    return dataSource[this.model].findAll();
  }

  async atualizaRegistro(dadosAtualizados, id) {
    const ListaDeRegistrosAtualizados = dataSource[this.model].update(
      dadosAtualizados,
      {
        where: { id: id },
      }
    );
    if (ListaDeRegistrosAtualizados[0] === 0) {
      return false;
    }
    return true; //API update retorna quantos registros uma lista foi modificada
  }
}

module.exports = Services;
