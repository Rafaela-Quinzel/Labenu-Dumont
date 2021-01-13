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



# EXERCÍCIO 05


a) SELECT COUNT(*), gender
   FROM Actor
   GROUP BY gender;
 - Resposta: 
  Retornou a quantidade de 'male' e 'female' que temos na tabela Actor. Pois o **SELECT COUNT(*), gender** está pegando todos os gêneros da tabela.


b) Resposta: 
- SELECT id, name
  FROM Actor
  ORDER BY name DESC;


c) Resposta: 
 - SELECT *
   FROM Actor
   ORDER BY salary;


d) Resposta: 
 - SELECT *
   FROM Actor
   ORDER BY salary DESC
   LIMIT 3;


e) Resposta: 
 - SELECT 
   AVG(salary), gender
   FROM Actor
   GROUP BY gender;



# EXERCÍCIO 06


a) Resposta: 
 - ALTER TABLE Movies
   ADD playing_limit_date DATE;


b) Resposta: 
 - ALTER TABLE Movies
   CHANGE rating rating FLOAT;


c) Resposta: 
 - UPDATE Movies
   SET playing_limit_date = "2021/01/20"
   WHERE id = "001";

 - UPDATE Movies
   SET playing_limit_date = "2019/12/31"
   WHERE id = "004";


d) Resposta:
 - DELETE 
   FROM Movies
   WHERE id = "001";



# EXERCÍCIO 07


a) SELECT 
   COUNT(*)
   FROM Movies
   WHERE rating > 7.5;
   - Resposta: 2 filmes


b) SELECT
   AVG(rating)
   FROM Movies;
   - Resposta: 8.0000


c) SELECT 
   COUNT(*)
   FROM Movies
   WHERE playing_limit_date > CURDATE();
   - Resposta: 0 filmes


d) SELECT 
   COUNT(*)
   FROM Movies
   WHERE release_date > CURDATE();
   - Resposta: 0 filmes


e) SELECT
   MAX(rating)
   FROM Movies;
   - Resposta: maior nota é 10 


f) SELECT
   MIN(rating)
   FROM Movies;
  - Resposta: menor nota é 7 



# EXERCÍCIO 08

a) Resposta: 
 - SELECT *
   FROM Movies
   ORDER BY title;


b) Resposta: 
 - SELECT *
   FROM Movies
   ORDER BY title
   LIMIT 5;


c) Resposta:
 - SELECT *
   FROM Movies
   WHERE release_date < CURDATE()
   ORDER BY release_date DESC
   LIMIT 3;


d) Resposta: 
 - SELECT *
   FROM Movies
   ORDER BY rating DESC
   LIMIT 3;



