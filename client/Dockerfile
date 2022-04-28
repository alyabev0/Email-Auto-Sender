FROM node

RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/app/frontend
RUN npm install -g npm@latest

WORKDIR /usr/src/app/frontend

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]