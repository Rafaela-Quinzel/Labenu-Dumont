# EXERCÍCIO 01

a) Resposta:
 - Uma chave estrangeira é quando há o relacionamento entre duas tabelas.


b) Resposta:
````
CREATE TABLE Rating (
id VARCHAR(255) PRIMARY KEY,
comment TEXT NOT NULL,
rate FLOAT NOT NULL,
movie_id VARCHAR(255),
FOREIGN KEY (movie_id) REFERENCES Movies(id)
);


INSERT INTO Rating (id, comment, rate, movie_id)
VALUES ('001', 'Muito bom!', 7, '004');
````

c) Resposta: Ocorreu este porque tentamos relacionar a tabela de comentários com a de filmes passando um id de um filme que não existe na tabela.
````
ERRO:

INSERT INTO Rating (id, comment, rate, movie_id) -- VALUES ('001', 'Muito bom!', 7, '004'); VALUES ('002', 'Muito bom!', 7, '555')	Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`dumont-rafaela-quinzel`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))	0.016 sec
````


d) Resposta:
````
ALTER TABLE Movies 
DROP COLUMN rating;
````

e) Resposta: Ocorreu este erro porque tantamos apagar algo deuma coluna que não existe na tabela selecionada.

````
ERRO:

DELETE FROM Rating WHERE rating = 6	Error Code: 1054. Unknown column 'rating' in 'where clause'	0.032 sec
````


# EXERCÍCIO 02


a) Resposta:
- A tabela criada terá duas colunas: 'movie_id' e 'actor_id'. As duas são FOREIGN KEY que refereciam os id das tabelas Movies e Actor respectivamente.


b) Resposta:
````
INSERT INTO MovieCast (movie_id, actor_id)
VALUES 
 ('001', '003'),
 ('004', '005'),
 ('002', '001'),
 ('003', '006'),
 ('001', '002'),
 ('005', '005');
 ````


 c) Resposta: Ocorreu este erro porque não existe o id (actor_id) informado na tabela Actor no qual tentamos relacionar ao id (movie_id) na tabela Movies.

 ````
 ERRO:

 INSERT INTO MovieCast (movie_id, actor_id) VALUES  ('005', '888') Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`dumont-rafaela-quinzel`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))	0.015 sec
````


d) Resposta: Ocorreu este erro porque tentamos apagar um id (actor_id) que esta relacionado a outro id (movie_id) na tabela MovieCast.

````
ERRO:

DELETE FROM Actor WHERE id = '001'	Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`dumont-rafaela-quinzel`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))	0.032 sec

````


