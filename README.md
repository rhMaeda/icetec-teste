
## Variáveis de Ambiente


{{url}}
## Documentação da API

#### Criação de usuário

```http
  POST /api/create.php
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `email` | `string` | **Obrigatório**. Email | JSON
| `password` | `string` | **Obrigatório**. Senha| JSON
| `name` | `string` | **Obrigatório**. Nome | JSON

#### Login

```http
  POST /api/login.php
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `email`      | `string` | **Obrigatório**. Email | JSON
| `password` | `string` | **Obrigatório**. Senha | JSON

#### Ver um usuário

```http
  GET /api/read_single.php?idUser={idUser}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `idUser`      | `int` | **Obrigatório**. ID do usuário | Query Param
| `token`      | `bearer` | **Obrigatório**. Bearer token gerado no login | Auth Bearer

#### Listar usuários

```http
  GET /api/read.php
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `token`      | `bearer` | **Obrigatório**. Bearer token gerado no login | Auth Bearer

#### Listar usuários

```http
  GET /api/read.php
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `token`      | `bearer` | **Obrigatório**. Bearer token gerado no login | Auth Bearer

#### Atualizar usuário

```http
  PUT /api/update.php?idUser={idUser}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `idUser`      | `int` | **Obrigatório**. ID do usuário | Query Param
| `email` | `string` | Email | JSON
| `password` | `string` |  Senha| JSON
| `name` | `string` |  Nome | JSON
| `token`      | `bearer` | **Obrigatório**. Bearer token gerado no login | Auth Bearer

#### Deletar usuário

```http
  DELETE /api/delete.php?idUser={idUser}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `idUser` | `string` | **Obrigatório**. ID do usuario | Query Param
| `token`      | `bearer` | **Obrigatório**. Bearer token gerado no login | Auth Bearer

#### Tomar um drink

```http
  POST /api/drink.php/?idUser={idUser}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `idUser` | `string` | **Obrigatório**. ID do usuario | Query Param
| `drinkCounter` | `int` | **Obrigatório**. ID do usuario | JSON
| `token`      | `bearer` | **Obrigatório**. Bearer token gerado no login | Auth Bearer



