# EXERCÍCIO 01

a) Resposta:
- Retorna um array com dados e metadados. Selecionamos o primeiro objeto do primeiro item desse array.


b) Resposta:
```
const getActorByName = async (name: string): Promise<any> => {
   const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = '${name}'
   `)
   
   return result[0][0]
}
```


c) Resposta:
```
const countActorByGender = async (gender: string): Promise<any> => {
   const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = '${gender}'
   `)
   
   return result[0][0].count
}
```