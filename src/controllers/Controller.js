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

  async atualiza(req, res) {
    const { id } = req.params;
    const dadosAtualizados = req.body;

    try {
      const foiAtualizado = await this.entidadeService.atualizaRegistro(
        dadosAtualizados,
        Number(id)
      );

      // retorno da função (true ou false)
      if (!foiAtualizado) {
        return res
          .status(400)
          .json({ mensagem: "Registro não foi atualizado" });
      }
      return res.status(200).json({ mensagem: "Atualizado com sucesso" });
    } catch (erro) {
      //erro
    }
  }
}

module.exports = Controller;
