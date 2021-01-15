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



# EXERCÍCIO 03


a) Resposta:
 - A query retorna uma tabela que contém informações das tabelas Movie e Rating. Onde o ON é uma condição que associa as informações das tabelas de modo a mostrar na mesma linha apenas as informações que possuam a mesma id em ambas tabelas.


b) Resposta: 
````
SELECT Movies.id, Movies.title, Rating.rate
FROM Movies
INNER JOIN Rating 
ON Movies.id = Rating.movie_id;
````


# EXERCÍCIO 04


a) Resposta:
````
SELECT Movies.id, Movies.title, Rating.rate AS rating, Rating.comment AS rating_comment
FROM Movies
LEFT JOIN Rating 
ON Movies.id = Rating.movie_id;
````


b) Resposta:
````
SELECT Movies.id, Movies.title, MovieCast.actor_id 
FROM Movies
RIGHT JOIN MovieCast
ON Movies.id = MovieCast.movie_id;
````


c) Resposta:
````
SELECT Movies.id, Movies.title, 
AVG(Rating.rate)
FROM Movies
LEFT JOIN Rating
ON Movies.id = Rating.movie_id
GROUP BY Movies.id;
````



# EXERCÍCIO 05


a) Resposta:
 -  A query vai juntar as informações da tabela Movies com a tabela MovieCast e relacioná-las entre si através das colunas id e movie_id. O uso do JOIN duas vezes é porque a tabela Actor necessita da tabela MovieCast, que por sua vez necessita das informações da tabela Movies.


b) Resposta:  
````
SELECT Movies.id AS movie_id, Movies.title AS movie_title, Actor.id AS actor_id, Actor.name AS actor_name
FROM Movies
LEFT JOIN MovieCast
ON Movies.id = MovieCast.movie_id
JOIN Actor ON Actor.id = MovieCast.actor_id;
````


c) Resposta: Ocorreu este erro porque diz que 'm' é desconhecida com uma coluna.
````
ERRO:

SELECT m.id as movie_id, m,title, a.id as actor_id, a.name FROM Movies m LEFT JOIN MovieCast mc ON m.id = mc.movie_id JOIN Actor a ON a.id = mc.actor_id LIMIT 0, 1000	Error Code: 1054. Unknown column 'm' in 'field list'	
````


d) Resposta: 
````
SELECT Movies.id AS movie_id, Movies.title AS movie_title, Rating.comment AS comment, Rating.rate AS rate, Actor.id AS actor_id, Actor.name AS actor_name
FROM Movies
LEFT JOIN Rating ON Movies.id = Rating.movie_id
LEFT JOIN MovieCast ON Movies.id = MovieCast.movie_id
JOIN Actor ON Actor.id = MovieCast.actor_id;
````



# EXERCÍCIO 06


a) Resposta:
 - A relação é N:M porque vários prêmios de Oscar que podem se relacionar com vários filmes.


b) Resposta:
 ````
 CREATE TABLE Oscar (
id VARCHAR(255) PRIMARY KEY,
name_award VARCHAR(255) NOT NULL,
date_award DATE NOT NULL
);


INSERT INTO Oscar
VALUES
('01', 'Óscar de melhor filme', '2021/01/14'),
('02', 'Óscar de melhor direção', '2020/01/14');


CREATE TABLE MoviesAwards (
movie_id VARCHAR(255),
oscar_id VARCHAR(255),
FOREIGN KEY (movie_id) REFERENCES Movies(id),
FOREIGN KEY (oscar_id) REFERENCES Oscar(id)
);
````


c) Resposta:
````
INSERT INTO MoviesAwards
VALUES
('001', '02'), ('001', '01'),
('002', '01'), ('002', '02'),
('003', '02'), ('003', '01'),
('004', '02'), ('004', '01'),
('005', '02'), ('005', '01');
````


d) Resposta:
````
SELECT Movies.title AS movie_title, Oscar.name_award
FROM MoviesAwards
RIGHT JOIN Movies
ON MoviesAwards.movie_id = Movies.id
JOIN Oscar
ON MoviesAwards.oscar_id = Oscar.id;
````
