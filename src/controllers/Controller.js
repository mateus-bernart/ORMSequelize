class Controller {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }
  async pegaTodos(req, res) {
    try {
      //acessar o modelo
      const listaDeRegistros =
        await this.entidadeService.pegaTodosOsRegistros();
      return res.status(200).json(listaDeRegistros);
    } catch (erro) {
      //erro
    }
  }
}

module.exports = Controller;
