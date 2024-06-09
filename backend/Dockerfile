FROM node:18.20.3

WORKDIR /backend-api
COPY package.json .
RUN npm install
COPY . .

CMD npm start