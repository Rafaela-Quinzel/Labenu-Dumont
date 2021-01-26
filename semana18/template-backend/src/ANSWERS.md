# EXERCÍCIO 01

a) Resposta:
 - **round** é o fator cost, um valor para definir o tempo. Quanto maior o valor que damos ao cost, mais lento será a requisição. 
 - **salt** é um dado aleatório gerado pelo bcrypt para ser um input adicional à mensagem que será encriptada. Quanto maior o round, melhor será por motivos de segurança. Ex: 12 que é um valor padrão


b) Resposta no arquivo hashManager.ts na pasta services.


c) Resposta no arquivo hashManager.ts na pasta services.


# EXERCÍCIO 02


a) Resposta:
 - O primeiro a ser modificado deve ser o cadastro, pois a senha criada será criptografada e depois fazemos o login. Assim é feito a comparação das senhas criptografadas, ou seja, a que foi salva no banco e que foi fornecida pelo usuário no momento de fazer login.


b) Resposta no arquivo createUser.ts na pasta de endpoints.


c) Resposta no arquivo createUser.ts na pasta de endpoints.


d) Resposta:
 - Não é necessário, pois nesse endpoint utiliza o token que foi resultado no momento do login e é conferido no header.



# EXERCÍCIO 03


a) Resposta:
````
ALTER TABLE Users_aula50
ADD role enum('NORMAL','ADMIN') DEFAULT 'NORMAL';
````

b) Resposta no arquivo authenticator.ts na pasta services.

c) Resposta no arquivo createUser.ts na pasta enpoints.

d) Resposta no arquivo login.ts na pasta enpoints.



