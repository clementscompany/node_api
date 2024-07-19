#variaveis de ambiente 

`.env `
- crie na raiz do projeto 
```sh
PORT=3000
DB_HOST=localhost
DB_USERNAME=root
DB_PORT=3306
DB_PASSWORD=''
DB_NAME=node_db
```


# instalar o pacote node_modules

```sh
npm install 
```
# rodar o servidor 

```sh
npm run dev 

```

- as rotas estao definidas no arquivo `app.js`

```sh
app.get("/", UserController.listAll);
app.get("/data/:id", UserController.listBy);
app.post('/post', UserController.cadastrate);
app.delete("/delete", UserController.deleteBy);
app.put('/update/:id', UserController.updateData);
```

# exemplo de uso

- GET /
`Retorna uma lista de todos os usuários.`

```sh 
#exemplo de uso 
http://localhost:3000/

#resposta

{
"response": [
	{
		"id": 10,
		"email": "Novo Moiseddds",
		"username": "488721wilsssliam@"
	}
]
}

```
- GET /data/:id
`GET http://localhost:3000/data/1`

- resultado 
```sh
{
    "id": 1,
    "username": "John Doe",
    "email": "john.doe@example.com"
}
```


- POST /post
`http://localhost:3000/post`

- corpo:
```sh
#json 
{
    "email": "email exemplo ",
    "username": "username exemplo"
}

- DELETE /delete
`DELETE http://localhost:3000/delete`
`Content-Type: application/json`

```sh
#corpo
{
    "id": 1
}

#resposta 

{
    "message": "Usuário deletado com sucesso!",
    "details": {}
}

```
- PUT /update/:id

`PUT http://localhost:3000/update/1`
`Content-Type: application/json`

```sh
{
    "email": "john.doe@example.com",
    "username": "John Doe",
}

```
# bancos de dados compativeis 
- `PostgreSQL` e `Mysql`
- instalado: `Mysql`
configura
