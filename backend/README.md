# Backend

## Criação da base de dados para desenvolvimento
```
docker network create pg
docker run -p 5432:5432 --name pg_db --net pg -e POSTGRES_PASSWORD=<SUA_SENHA_DO_BANCO_DE_DADOS> -d postgres
docker exec -it pg_db psql -U postgres
CREATE DATABASE dev;
```

## Conectando-se à base de dados

Garanta que o banco de dados está rodando

```
docker start pg_db
```

Altere o arquivo de [propriedades da aplicação](./src/main/resources/application.properties) e coloque a senha com a qual o banco foi criado.
