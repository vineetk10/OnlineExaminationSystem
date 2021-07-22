FROM node:10.16-alpine

WORKDIR /usr/nodeapp

COPY ./package.json ./

RUN npm install
COPY ./ ./

EXPOSE 8003

CMD ["npm", "start"]