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



