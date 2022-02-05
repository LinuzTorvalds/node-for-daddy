# Project to manage the material validity of a hospital stock

- If you want to copy the project, run git clone and then yarn to download the dependencies

## tutorial image docker

- if you want to generate the project image have docker installed on your machine, to install docker see the documentation :)

- run docker pull postgres to download a docker image

- create a directory to store the data

- run: docker network create --subnet 172.21.0.0/16 --ip-range 172.21.240.0/20 my-net ,to create a sub net

- then run: docker run -p 5432:5432 -v directory created above:/var/lib/postgresql/data -e POSTGRES_PASSWORD=docker -d --name postgres --network=my-net --ip 172.21.0.2 postgres

- in .env use the database url this way postgresql://postgres:docker@172.21.0.2:5432/stock?schema=public

- run: yarn prisma generate

- run: yarn prisma migrate dev to generate the database

- run: docker build -t nodefordaddy . to generate the project image

- run: docker run -p 3005:3005 -d --name nodedaddy --network=my-net nodefordaddy to run the project
