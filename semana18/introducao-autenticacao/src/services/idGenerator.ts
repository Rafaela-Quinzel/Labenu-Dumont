import { v4 } from 'uuid'

// Exercício 01 letra a -> Uma string pode conter números e letras juntos, aumentando a segurança e tornando os ids únicos.

// Exercício 01 letra b
export function generate(): string {
    return v4()
}