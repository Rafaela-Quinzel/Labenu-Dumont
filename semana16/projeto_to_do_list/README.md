# Projeto TO DO LIST

**ENDPOINTS:**

***Criar usuário***
- Método: PUT ou POST
- Path: `/user/createUser`
- Body:

```json
{
	"name": "Astro Dev",
	"nickname": "astrodev",
	"email": "astro@dev.com"
}
```

***Pegar usuário pelo id***
- Método: GET
- Path: `/user/:id`
- Path Param: é o id do usuário
- Body de Resposta:

```json
{
	"id": "001",
	"nickname": "astrodev"
}
```

***Editar usuário***

- Método: POST
- Path: `/user/edit/:id`
- Path Param: é o id do usuário
- Body:

```json
{
	"name": "Astro Dev",
	"nickname": "astrodev"
}
```


***Criar tarefa***

- Método: PUT ou POST
- Path: `/task/createTask`
- Body:

```json
{
	"title": "Criar banco dos alunos",
	"description": "Devemos criar o banco dos alunos para o módulo do backend",
	"limitDate": "04/05/2020",
	"creatorUserId": "001"
}
```

***Pegar tarefa pelo id***
- Método: GET
- Path: `/task/:id`
- Path Param: é o id da tarefa
- Body de Resposta:

```json
{
	"taskId": "001",
	"title": "Criar banco dos alunos",
	"description": "Devemos criar o banco dos alunos para o módulo do backend",
	"limitDate": "04/05/2020",
	"status": "to_do",
	"creatorUserId": "001",
	"creatorUserNickname": "astrodev"
}
```

***Pegar todos os usuários***
- Método: GET
- Path: `/users/all`
- Body de Resposta:

```json
{
	"id": "001",
	"nickname": "astrodev"
}
```


***Pegar tarefas criadas pelo usuário***
- Método: GET
- Path: `/task?user=id`
- Body de Resposta:

```json
{
	"id": "001",
	"nickname": "astrodev"
}
```
