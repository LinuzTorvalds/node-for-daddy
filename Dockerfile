FROM node:alpine

ENV PORT=3005
ENV DATABASE_URL=postgresql://postgres:docker@172.21.0.2:5432/stock?schema=public

WORKDIR /usr/app

COPY package.json yarn.lock ./

RUN yarn

COPY . .

RUN yarn prisma generate

RUN yarn build

EXPOSE ${PORT}

CMD yarn start