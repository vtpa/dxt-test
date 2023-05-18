# Backend Serverless E-commerce
*Back-End: Este é o repositório do backend serverless para uma aplicação de e-commerce. O objetivo deste projeto é fornecer uma API para gerenciar produtos, pedidos e carrinho de compras dos usuários.*

### Informações

## Requisitos Funcionais
- [x] Deve ser possível criar um novo produto com base nos dados fornecidos.
- [x] Deve ser possível obter os detalhes de um produto com base em seu ID.
- [x] Deve ser possível listar todos os produtos disponíveis.
- [x] Deve ser possível atualizar as informações de um produto existente com base em seu ID.
- [x] Deve ser possível excluir um produto com base em seu ID.
- [-] Deve ser possível adicionar um item ao carrinho de compras do usuário. (Front)
- [-] Deve ser possível remover um item do carrinho de compras do usuário com base no ID do item. (Front)
- [x] Deve ser possível finalizar um pedido:
      - [x] criando um registro de pedido, 
      - [x] atualizando a quantidade disponível dos produtos relacionados e 
      - [-]  esvaziando o carrinho de compras. (Front)

## Requisitos Não Funcionais
- Utilizar AWS Lambda
- Utilizar Serverless Framework
- Utilizar Banco de dados MongoDB (hospedado no MongoDB Atlas ou em outra plataforma)
- Utilizar Node.js


### Tabelas
- products
  - id
  - title
  - description
  - price
  - amount

- orders
  - id
  - products[]