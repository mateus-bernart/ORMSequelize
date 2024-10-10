## Projeto de backend com Node.js para o estudo de ORM`s com Sequelize e SQLite

- ORM Sequelize: utilizar a sintaxe e lógica do js para realizar consultas SQL.
- - Maior produtividade, legibilidade, abstração na hora da manutenção, segurança nos inputs

Com isso, foi utilizado 'Services' como um centralizador de ações do Controller, se tornando padrão para todas os models funções básicas de modificação de banco de dados.
- Redirecionamento para rotas: elas puxam funções do controller, que são puxadas do Services.
- - Melhora na legibilidade e produtividade da criação de models seguindo regras de negócio específica e não a mercê da arquitetura padrão do Sequelize como ORM.

