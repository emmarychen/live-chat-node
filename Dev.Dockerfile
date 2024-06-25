FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install && npm install -g nodemon

COPY . .

EXPOSE 3000

ENV NODE_ENV=development

CMD npm run dev