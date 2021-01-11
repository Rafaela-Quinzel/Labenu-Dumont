# EXERCÍCIO 01

a) Resposta: 
- O comando VARCHAR serve para determinar o máximo de caracteres permitidos e dentro do parentese "(255)" representa o número máximo de caracteres.
- O comando DATE representa uma data(ano-mês-dia).
- PRIMARY KEY significa chave primária e o seu valor tem que ser único.
- NOT NULL significa que o valor não pode ficar vazio.


b) Resposta: 
- No comando SHOW DATABASES mostra os bancos de dados presentes no sistema.
- No comando SHOW TABLES mostra as tabelas que você criou.


c) Resposta: 
- O comando DESCRIBE Actor traz todas as informações da tabela.


# EXERCÍCIO 02

a) Resposta: 
 - Query criada.


b) Resposta: 
 - ERRO: INSERT INTO Actor (id, name, salary, birth_date, gender) VALUES(   "002",   "Fulana",   1200000,   "1963-08-23",   "female"   )	Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
 * OBS: Esse erro ocorreu porque a chave primária(id) está duplicado.


c) Resposta: 
 - ERRO: INSERT INTO Actor (id, name, salary) VALUES(   "003",   "Fernanda Montenegro",   300000,   "1929-10-19",   "female"   )	Error Code: 1136. Column count doesn't match value count at row 1

 * OBS: Esse erro ocorreu porque no "INSERT INTO Actor" estamos passando (id, name, salary) referente as colunas e no VALUES estamos informando valores a mais do que passamos nas colunas. 


d) Resposta: 
   - ERRO: INSERT INTO Actor (id, name, salary) VALUES(   "004",   400000,   "1949-04-18",   "male"   )	Error Code: 1136. Column count doesn't match value count at row 1	0.016 sec

   * OBS: Esse erro ocorreu porque no "INSERT INTO Actor" estamos passando (id, name, salary, birth_date, gender) referente as colunas e no VALUES estamos informando valores com exceção do name. Como não informamos esse valor, retornou um erro.


e) Resposta: 
 - ERRO: INSERT INTO Actor (id, name, salary, birth_date, gender) VALUES(   "005",   "Juliana Paes",   719333.33,   1979-03-26,   "female"   )	Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1	0.016 sec

 * OBS: Esse erro ocorreu porque o valores das colunas birth_date e salary estão inválidos. No valor da coluna birth_date deveria ser infomado um valor no formato de uma data e na coluna salary somente números inteiros. 


f) Resposta: 
 - Queries criadas.



 # EXERCÍCIO 03


a) Resposta:
  - SELECT id, name 
    FROM Actor 
    WHERE gender = "female";


b) Resposta: 
 - SELECT id, name, salary
   FROM Actor
   WHERE name = "Tony Ramos";


c) Resposta: 
 - SELECT *
   FROM Actor
   WHERE gender = "invalid";

 - Retornou uma linha com todos as colunas da tabela, porém todas elas com valor "NULL" porque não há nenhum item com gender "invalid".


 d) Resposta: 
 - SELECT *
   FROM Actor
   WHERE salary <= 500000;


e) Resposta: 
  - ERRO: SELECT id, nome FROM Actor WHERE id = "002" LIMIT 0, 1000	Error Code: 1054. Unknown column 'nome' in 'field list'	0.031 sec

  * OBS: Esse erro ocorreu porque "nome" não pertence as colunas da tabela.

  - SUCESSO: SELECT id, name FROM Actor WHERE id = "002" LIMIT 0, 1000	1 row(s) returned	0.015 sec / 0.000 sec

  * OBS: Troquei de "nome" para "name" e funcionou corretamente, tranzendo o nome a quem pertence o id solicitado.
















