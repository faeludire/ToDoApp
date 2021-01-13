FROM node:12-alpine

WORKDIR /ToDoApp -v "$(pwd):/ToDoApp"
COPY package*.json ./
RUN npm install
RUN npm install -g nodemon
COPY . .
CMD ["nodemon", "src/index.js"]
