# Backend Serverless E-commerce OU Frontend React E-commerce

Back-End: Este é o repositório do backend serverless para uma aplicação de e-commerce. O objetivo deste projeto é fornecer uma API para gerenciar produtos, pedidos e carrinho de compras dos usuários.

Front-End: Este é o repositório do frontend React para uma aplicação de e-commerce utilizando o Ant Design como biblioteca de componentes. O objetivo deste projeto é fornecer uma interface de usuário moderna e intuitiva para os clientes realizarem compras de produtos.

Full Stack: Ambos acima

## Requisitos Back-End

- AWS Lambda
- Serverless Framework
- Banco de dados MongoDB (hospedado no MongoDB Atlas ou em outra plataforma)
- Node.js

## Requisitos Front-End
- React
- Redux
- Ant Design
- Node.js

## Funcionalidades

1. **Criar um produto**: Crie um novo produto com base nos dados fornecidos.
2. **Obter um produto**: Obtenha os detalhes de um produto com base em seu ID.
3. **Listar produtos**: Liste todos os produtos disponíveis.
4. **Atualizar um produto**: Atualize as informações de um produto existente com base em seu ID.
5. **Excluir um produto**: Exclua um produto com base em seu ID.
6. **Adicionar um item ao carrinho**: Adicione um item ao carrinho de compras do usuário.
7. **Remover um item do carrinho**: Remova um item do carrinho de compras do usuário com base no ID do item.
8. **Finalizar um pedido**: Finalize um pedido, criando um registro de pedido, atualizando a quantidade disponível dos produtos relacionados e esvaziando o carrinho de compras.

## Configuração Back-End

Antes de executar a aplicação, você precisa configurar as seguintes variáveis de ambiente:

- `MONGODB_URI`: URL de conexão com o banco de dados MongoDB.
- `AWS_ACCESS_KEY_ID` e `AWS_SECRET_ACCESS_KEY`: Credenciais da conta da AWS com permissões para criar e gerenciar recursos do AWS Lambda.

Pode ser uma configuração localmente também

## Configuração Front-End
Antes de executar a aplicação, você precisa configurar as seguintes variáveis de ambiente:
- `API`: Pode realizar um Mock para as requests

## Implantação Back-End

Siga as etapas abaixo para implantar a aplicação:

1. Faça o clone deste repositório.
2. Configure as variáveis de ambiente conforme mencionado na seção de configuração.
3. Execute o comando `npm install` para instalar as dependências.
4. Execute o comando `serverless deploy` para implantar as funções serverless no AWS Lambda.
5. O passo 4 é opcional de acordo com o conhecimento de Cloud

## Testes - Diferencial

Trabalhe criando os testes automatizados e deixe o comando `npm test` para realizar os testes. Certifique-se de configurar um ambiente de teste adequado antes de executar os testes.

