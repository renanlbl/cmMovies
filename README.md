# cmMovies

### Tecnologias:
- Front-end:
- 1) ReactJS
- 2) SASS
- Back-end:
- 1) NodeJS
- 2) Express
- 3) bcrypt
- 4) nodemon 
- 5) cors
- 6) body-parser
- 7) jwt (json web token)
- 8) mongodb (banco de dados NoSQL)
- 9) mongoose (ORM pro mongodb)

### Instalando

- 1) Passo é instalar o docker (https://docs.docker.com/install/) lá mostra como baixar em cada sistema operacional.
- 2) Verificar se o docker está instalado, basta rodar na no terminal: `docker -v` isso deve retornar a versão atual do Docker.
- 3) Baixar o MongoDB (Bando de dados não relacional utilizado para fazer o sistema de registro no back-end) com o comando abaixo:
- 4) `docker run --name mongocinema -p 27017:27017 -d -t mongo`
- 5) Baixar o Yarn para sua máquina (gerênciador de pacotes do node) basta selecionar seu sistema operacional e baixar (https://legacy.yarnpkg.com/lang/en/docs/install/#debian-stable)
- 6) Verifique se o yarn está na sua máquina rodando o comando: `yarn -v` isso deve retortar a versão atual do Docker.
- 7) Clone o repositório.
- 8) Certifique-se que o container do docker está rodando na sua máquina, rode: `docker ps` se aparecer o container com name `mongocinema` é porque está rodando, caso contrário 
execute: `docker start mongocinema` Obs: "Isso também vale para toda vez que você reiniciar a sua máquina".
- 9) Entre no `/backend` e rode `yarn install` e quando acabar rode `yarn dev` por padrão o backend irá rodar na porta :5000
- 10) Entre no `/frontend` e rode `yarn install` e quando acabar rode `yarn start` por padrão o frontend irá executar na porta :3000


#### Agora é ser feliz :D 
