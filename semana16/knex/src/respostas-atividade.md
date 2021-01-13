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



# EXERCÍCIO 02


a) Resposta: 
```
const updateSalaryById = async (
    id: string,
    salary: number
   ): Promise<any> => {
       await connection("Actor")
       .update({
          salary: salary,
     })
     .where("id", id);
}
```

b) Resposta:
```
const deleteActorById = async (id: string) : Promise<any> => {
   await connection("Actor")
   .delete()
   .where("id",id)
}
```

c) Resposta: 
```
const averageSalary = async (gender: string) : Promise<any> => {
   const result = await connection("Actor")
   .avg("salary as average")
   .where({gender})
   return result[0].average
}
````