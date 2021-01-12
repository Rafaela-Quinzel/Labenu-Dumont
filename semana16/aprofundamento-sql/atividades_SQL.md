# EXERCÍCIO 01

a) ALTER TABLE Actor DROP COLUMN salary;
- Resposta: 
  * O comando **ALTER TABLE** altera a estrutura de uma tabela já existente. Neste caso a tabela de atores que criamos.
  * O comando **DROP COLUMN** remove uma coluna. Neste caso, está removendo a coluna salary. 


b) ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
- Resposta: 
  * O comando **ALTER TABLE** altera a estrutura de uma tabela já existente. Neste caso a tabela de atores que criamos.
  * O comando **CHANGE** modificar ou renomear as colunas. Neste caso, estamos alterando a coluna gender(gênero) para sex(sexo).
  * O comando **VARCHAR(6)** determina o número de caracteres da string.


c) ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
- Resposta: 
   * O comando **ALTER TABLE** altera a estrutura de uma tabela já existente. Neste caso a tabela de atores que criamos.
  * O comando **CHANGE** modificar ou renomear as colunas. Neste caso, estamos alterando a coluna gender(gênero) para gender novamente.
  * O comando **VARCHAR(255)** determina o número de caracteres da string. Aqui estamos aumentando o número de caracteres permitidos.


d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
- Resposta:
 * Estamos alterando a coluna **gender** para que aceite strings até 100 caracteres. 



 # EXERCÍCIO 02 

 a) Resposta:
  - UPDATE Actor
    SET name = "Fagundes"
    WHERE id = "003";

 - UPDATE Actor
   SET birth_date = "1950-05-20"
   WHERE id = "003";


b) Resposta:
  - UPDATE Actor
    SET name = "JULIANA PÃES"
    WHERE id = "006";

 - UPDATE Actor
   SET name = "Juliana Paes"
   WHERE id = "006";


c) Resposta: 
 - UPDATE Actor
   SET 
   name = "Moacyr Franco",
   birth_date = "1968-02-10",
   salary = 8500000,
   gender = "male"
   WHERE id = "005";


d) UPDATE Actor
   SET name = "Moacyr Franco"
   WHERE id = "123"; 
- **Retorno**: 
  UPDATE Actor SET name = "Moacyr Franco" WHERE id = "123"	0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0	0.016 sec
- **Resposta**: 
  Não retornou nenhum erro, porém também não atualizou nada. Pois o id e o nome informados não existem na tabela.



# EXERCÍCIO 03


a) Resposta: 
 - DELETE
   FROM Actor
   WHERE name = "Fernanda Montenegro";


b) Resposta: 
 -  DELETE
    FROM Actor
    WHERE gender = "male" AND salary > 1000000;


# EXERCÍCIO 04

a) Resposta:
 - SELECT MAX(salary)
   FROM Actor;


b) Resposta: 
 - SELECT MIN(salary)
   FROM Actor
   WHERE gender = 'female';


c) Resposta: 
 - SELECT 
   COUNT(*)
   FROM Actor
   WHERE gender = 'female';


d) Resposta: 
 - SELECT 
   SUM(salary)
   FROM Actor;


