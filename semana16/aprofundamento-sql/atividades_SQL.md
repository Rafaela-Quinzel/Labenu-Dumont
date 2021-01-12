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


