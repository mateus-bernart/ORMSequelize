## Projeto de backend (API REST) com Node.js para o estudo de ORM`s com Sequelize e SQLite

- ORM Sequelize: utilizar a sintaxe e lógica do js para realizar consultas SQL.
- - Maior produtividade, legibilidade, abstração na hora da manutenção, segurança nos inputs

Com isso, foi utilizado 'Services' como um centralizador de ações do Controller, se tornando padrão para todas os models funções básicas de modificação de banco de dados.

- Services é uma das camadas principais adicionadas ao MVC básico para aumentar a modularidade da aplicação e deixá-la mais desacoplada e testável. Ela interpreta a camada lógica das regras de negócio como validação, lógica de cálculos e interações entre entidades ficam separadas da camada que maneja as requisições (o controller), e o model fica apenas pela interação com os dados.

- model > service > controller > route
