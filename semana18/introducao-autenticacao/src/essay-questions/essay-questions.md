# EXERCÍCIO 01

a) Resposta:
 - Uma string pode conter números e letras juntos, aumentando a segurança e tornando os ids únicos.

b) Resposta:
````
Arquivo na pasta Services:

import { v4 } from 'uuid'

export function generate(): string {
    return v4()
}
````


# EXERCÍCIO 02

a) Resposta:
 - O userTableName está chamando a tabela 'User'.

 - A função connection é referente aos dados de acceso do criador do código da aplicação ao bando de dados, que estão sendo guardados no arquivo .env.

 - A query createUser está inserindo na tabela 'USer' id, email e password.

b) Resposta no arquivo tables.sql


c) Resposta no arquivo insertUser.ts