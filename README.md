# **MyShop - Documentação**
## Visão Geral
O MyShop é um projeto de comércio eletrônico desenvolvido com TypeScript e React. Ele oferece um layout inicial para uma loja online, onde os clientes podem visualizar produtos, adicioná-los ao carrinho e efetuar compras. Os dados dos produtos são obtidos de uma API pública: FakeStoreAPI. Além disso, há um arquivo local ./data/products.ts que contém os dados dos produtos para melhorar a experiência de desenvolvimento.

## Instalação
Certifique-se de ter o Yarn instalado antes de prosseguir. Siga os passos abaixo para configurar e iniciar o projeto:
```
git clone https://github.com/lluismarcello333/MyShop.git
cd MyShop
yarn install
```
## Execução
Inicie o servidor de desenvolvimento com o seguinte comando:

```
yarn start
```
O aplicativo estará acessível em http://localhost:3000.

## Estrutura do Projeto
A estrutura do projeto MyShop é organizada da seguinte maneira:

```
MyShop/
|-- public/
|-- src/
|   |-- components/
|   |-- data/
|   |   |-- products.ts
|   |-- pages/
|   |-- store/
|   |-- App.tsx
|   |-- index.tsx
|-- .gitignore
|-- package.json
|-- README.md
|-- tsconfig.json
```
* public/: Contém os arquivos públicos do aplicativo.
* src/: Contém o código-fonte do aplicativo.
* components/: Componentes reutilizáveis.
* data/: Dados locais, incluindo o arquivo products.ts.
* pages/: Componentes específicos de página.
* store/: Configurações Redux.
* App.tsx: Componente principal do aplicativo.
* index.tsx: Ponto de entrada do aplicativo.
* .gitignore: Arquivo de configuração para ignorar arquivos desnecessários no controle de versão.
* package.json: Arquivo de configuração do projeto com as dependências e scripts definidos.
* README.md: Documentação do projeto.
* tsconfig.json: Configurações do TypeScript.
## Dependências Principais
* @reduxjs/toolkit: Biblioteca Redux para facilitar a gestão do estado.
* react: Biblioteca principal do React.
* react-dom: Renderizador do React para o navegador.
* react-icons: Conjunto de ícones para React.
* react-redux: Biblioteca para integrar o Redux ao React.
* redux: Biblioteca de gerenciamento de estado.
* styled-components: Biblioteca para estilização de componentes React com CSS-in-JS.
* typescript: Superset de JavaScript que adiciona tipagem estática ao código.
* web-vitals: Ferramenta para medição de métricas vitais da web.
## Scripts
* yarn start: Inicia o servidor de desenvolvimento.
* yarn build: Compila o aplicativo para produção.
* yarn test: Executa os testes do aplicativo.
* yarn eject: Ejeta o ambiente de configuração do Create React App (não recomendado).
## Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests para melhorar o projeto.

Visite o Projeto: [MyShop](https://my-shop-jade.vercel.app/)
