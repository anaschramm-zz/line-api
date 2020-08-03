#   :computer: API - RPC - Gerenciamento de fila pessoas


Criação de uma API-RPC para o gerenciamento de uma fila de pessoas. O projeto foi feito em nodeJs e os dados foram salvos em um arquivo JSON.

Esse projeto apresenta os seguintes endpoints:

`/createUser` - Cadastra usuário;</br>
`/addToLine` - Coloca um usuário na última posição da fila;</br>
`/findPosition` - Retorna a posição de um usuário a partir de seu email;</br>
`/showLine` - Lista os usuários da fila e suas respectivas posições;</br>
`/filterLine` - Lista os usuários filtrados a partir do gênero;</br>
`/popLine` - Tira a pessoa na primeira posição da fila;</br>
</h3>

Tabela de conteúdos
=================
<!--ts-->
   * [Endpoints](#Endpoints)
   * [Observações](#Observações)
   * [Pré-requisitos para rodar o projeto](#Pré-requisitos-para-rodar-o-projeto)
   * [Clonando o projeto](#Clonando-o-projeto)
   * [Instalando o projeto](#Instalando-o-projeto)
   * [Rodando o projeto](#Rodando-o-projeto)
   * [Rodando os testes](#Rodando-os-testes)
   * [Documentação dos endpoints](#Documentação-dos-endpoints)
<!--te-->

## Endpoints

### Cadastrar usuário

Esse metódo recebe o nome, e-mail e gênero do usuário e retorna id, nome e email e gênero.

### Adicionar a fila

Esse metódo recebe o id do usuário a ser adicionado à fila e retorna a posição em que ele está na fila.

### Buscar usuário na fila

Esse metódo recebe o e-mail de um usuário e retorna a posição dele na fila.

### Ver fila

Esse metódo retorna uma lista de usuários (nome, gênero e email), bem como a posição de cada um deles na fila (ordenando de primeira posição para última).

### Filtrar fila

Esse metódo recebe um gênero de usuário e retornar uma lista de usuários com aquele gênero (nome, gênero e email), bem como a posição de cada um deles na fila (ordenando de primeira posição para última).

### Tirar da fila

Esse metódo retira da fila a pessoa na primeira posição e retorna-la.

## Observações

### Validações

- Não foi feita a validação do gênero, para que a pessoa se sinta livre para se identificar como quiser ao inserir os dados.
- Inserção de email inválido (Sem a estrutura ana@email.algo)
- Inserção de dois usuários iguais no cadastro (Verificação feita através do email)
- Inserção de dois usuários iguais na fila (Verificação feita através do ID)
- Testes unitários

## Pré-requisitos para rodar o projeto

Para rodar o projeto, você precisará ter o Node.js instalado na sua máquina.

### Node
- #### Instalação do Node no Windows
    Acesse a página oficial do Node.js (https://nodejs.org) e baixe o instalador.
Tenha certeza também que tem o `git` disponível no seu PATH, você também pode precisar do `npm`.

- #### Instalação do Node no Ubuntu
    Você pode instalar facilmente o nodejs e o npm com um apt install, basta seguir os seguintes comandos.

        $ sudo apt install nodejs
        $ sudo apt install npm

- #### Outros sistemas operacionais
    Você pode achar mais informações sobre a instalação no site oficial do Node.js (https://nodejs.org/) e no site oficial do NPM.

Para verificar que a instalação foi feita com sucesso, você pode seguir os seguintes comandos.

$ node --version
v12.14.1

$ npm --version
6.13.4

## Clonando o projeto

Para clonar o projeto, basta criar uma pasta no seu computador, acessá-la pelo terminal e utilizar o seguinte comando.
   ```bash
$ git clone git@github.com:anaschramm/cubos-clinic-api.git
  ```
## Instalando o projeto

Para instalar o projeto na sua máquina, basta instalar todas as dependências presentes no arquivo `package.json` usando o seguinte comando no seu terminal.
  ```bash
$ npm install
  ```
## Rodando o projeto

Para rodar o projeto, basta utilizar o seguinte comando.
  ```bash
$ npm start
  ```
## Rodando os testes

Para rodar os testes, basta utilizar o seguinte comando.
 ```bash
$ npm test
  ```
## Documentação dos endpoints

Link para acessar o postman:

Documentação da collection:



