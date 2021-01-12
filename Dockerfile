FROM node:12-alpine

WORKDIR /ToDoApp
COPY package*.json ./
RUN npm install
COPY . .
CMD ["node", "src/index.js"]
