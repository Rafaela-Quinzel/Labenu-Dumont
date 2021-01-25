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


